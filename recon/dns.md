---
title: DNS Recon
description: 
published: true
date: 2021-01-12T22:04:17.448Z
tags: dns, recon
editor: markdown
dateCreated: 2021-01-08T18:39:33.007Z
---

# DNS Recon

It's always DNS fault...


## DNS Server Domain Lookup

This is just a quick way to identify the domain being by the server you have access to. Most of the time you already know the domain. This is mostly helpful on CTFs and HTB. However, if you find a random DNS server on the network and it's not resolving the domains you think it should, then this may work to help figure out what zones it hosts.

If the server includes a reverse zone (in-addr.arpa) for itself, you can reverse resolve the IP address and possibly get the FQDN as shown below:

```
root@kali:~# dig @192.168.80.10 -x 192.168.80.10

; <<>> DiG 9.16.1-Ubuntu <<>> @192.168.80.10 -x 192.168.80.10
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 32989
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4000
;; QUESTION SECTION:
;10.80.168.192.in-addr.arpa.    IN      PTR

;; ANSWER SECTION:
10.80.168.192.in-addr.arpa. 1200 IN     PTR     dc1.sittingduck.info.
```