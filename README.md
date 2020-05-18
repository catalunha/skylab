~~~
catalunha@stack:~$ mongoDb
mongoDb: command not found
catalunha@stack:~$ mongo

Command 'mongo' not found, but can be installed with:

sudo apt install mongodb-clients

catalunha@stack:~$ docker

Command 'docker' not found, but can be installed with:

sudo snap install docker     # version 18.09.9, or
sudo apt  install docker.io  # version 19.03.8-0ubuntu1

See 'snap info docker' for additional versions.

catalunha@stack:~$ sudo apt-get update
[sudo] password for catalunha: 
Hit:1 http://br.archive.ubuntu.com/ubuntu focal InRelease
Get:2 http://br.archive.ubuntu.com/ubuntu focal-updates InRelease [107 kB]     
Hit:3 https://deb.nodesource.com/node_12.x focal InRelease                     
Get:4 http://dl.google.com/linux/chrome/deb stable InRelease [1,811 B]         
Get:5 http://br.archive.ubuntu.com/ubuntu focal-backports InRelease [98.3 kB]  
Get:6 http://security.ubuntu.com/ubuntu focal-security InRelease [107 kB]      
Hit:7 http://ppa.launchpad.net/atareao/nemo-extensions/ubuntu focal InRelease  
Ign:8 https://storage.googleapis.com/download.dartlang.org/linux/debian stable InRelease
Get:9 http://dl.google.com/linux/chrome/deb stable/main amd64 Packages [1,126 B]
Get:10 http://br.archive.ubuntu.com/ubuntu focal-updates/main amd64 Packages [101 kB]
Hit:11 https://storage.googleapis.com/download.dartlang.org/linux/debian stable Release
Get:12 http://br.archive.ubuntu.com/ubuntu focal-updates/main Translation-en [36.9 kB]
Get:13 http://br.archive.ubuntu.com/ubuntu focal-updates/main amd64 DEP-11 Metadata [90.3 kB]
Get:14 http://br.archive.ubuntu.com/ubuntu focal-updates/main amd64 c-n-f Metadata [2,312 B]
Get:15 http://br.archive.ubuntu.com/ubuntu focal-updates/universe i386 Packages [22.1 kB]
Get:16 http://br.archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages [48.6 kB]
Get:17 http://br.archive.ubuntu.com/ubuntu focal-updates/universe Translation-en [20.4 kB]
Get:18 http://br.archive.ubuntu.com/ubuntu focal-updates/universe amd64 DEP-11 Metadata [21.5 kB]
Get:19 http://br.archive.ubuntu.com/ubuntu focal-updates/universe amd64 c-n-f Metadata [1,380 B]
Get:20 http://br.archive.ubuntu.com/ubuntu focal-backports/universe amd64 DEP-11 Metadata [532 B]
Hit:21 http://ppa.launchpad.net/kdenlive/kdenlive-stable/ubuntu focal InRelease
Get:23 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [61.2 kB]
Get:24 http://security.ubuntu.com/ubuntu focal-security/main Translation-en [23.0 kB]
Get:25 http://security.ubuntu.com/ubuntu focal-security/main amd64 DEP-11 Metadata [16.6 kB]
Get:26 http://security.ubuntu.com/ubuntu focal-security/main amd64 c-n-f Metadata [1,592 B]
Get:27 http://security.ubuntu.com/ubuntu focal-security/universe i386 Packages [8,428 B]
Get:28 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [27.5 kB]
Get:29 http://security.ubuntu.com/ubuntu focal-security/universe Translation-en [12.1 kB]
Get:30 http://security.ubuntu.com/ubuntu focal-security/universe amd64 DEP-11 Metadata [208 B]
Get:31 http://security.ubuntu.com/ubuntu focal-security/universe amd64 c-n-f Metadata [784 B]
Fetched 811 kB in 2s (495 kB/s)                   
Reading package lists... Done
catalunha@stack:~$ sudo apt-get install docker-ce docker-ce-cli containerd.io
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Package docker-ce is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source

E: Package 'docker-ce' has no installation candidate
E: Unable to locate package docker-ce-cli
E: Unable to locate package containerd.io
E: Couldn't find any package by glob 'containerd.io'
E: Couldn't find any package by regex 'containerd.io'
catalunha@stack:~$ sudo apt-get install \
>     apt-transport-https \
>     ca-certificates \
>     curl \
>     gnupg-agent \
>     software-properties-common
Reading package lists... Done
Building dependency tree       
Reading state information... Done
ca-certificates is already the newest version (20190110ubuntu1).
ca-certificates set to manually installed.
curl is already the newest version (7.68.0-1ubuntu2).
software-properties-common is already the newest version (0.98.9).
software-properties-common set to manually installed.
apt-transport-https is already the newest version (2.0.2ubuntu0.1).
The following packages were automatically installed and are no longer required:
  dvdauthor dvgrab gyp libc-ares2 libjs-is-typedarray libjs-psl
  libjs-typedarray-to-buffer libquicktime2 libssl-dev libuv1-dev node-ajv
  node-ansi node-ansi-align node-ansi-styles node-ansistyles node-archy
  node-asap node-asn1 node-assert-plus node-asynckit node-aws-sign2 node-aws4
  node-bcrypt-pbkdf node-bl node-bluebird node-boxen node-builtins
  node-cacache node-call-limit node-camelcase node-caseless node-chalk
  node-ci-info node-cli-boxes node-cliui node-co node-color-convert
  node-color-name node-colors node-columnify node-combined-stream
  node-concat-stream node-config-chain node-configstore node-copy-concurrently
  node-cross-spawn node-crypto-random-string node-cyclist node-dashdash
  node-debug node-decamelize node-decompress-response node-define-properties
  node-delayed-stream node-detect-indent node-detect-newline node-dot-prop
  node-duplexer3 node-duplexify node-ecc-jsbn node-editor node-encoding
  node-end-of-stream node-err-code node-errno node-es6-promise
  node-escape-string-regexp node-execa node-extend node-extsprintf
  node-fast-deep-equal node-find-up node-flush-write-stream node-forever-agent
  node-form-data node-from2 node-fs-vacuum node-fs-write-stream-atomic
  node-function-bind node-genfun node-get-caller-file node-get-stream
  node-getpass node-got node-har-schema node-har-validator node-has-flag
  node-has-symbol-support-x node-has-to-string-tag-x node-hosted-git-info
  node-http-signature node-iconv-lite node-iferr node-import-lazy
  node-imurmurhash node-invert-kv node-ip node-ip-regex node-is-npm
  node-is-obj node-is-object node-is-path-inside node-is-plain-obj
  node-is-retry-allowed node-is-stream node-is-typedarray node-isexe
  node-isstream node-isurl node-jsbn node-json-parse-better-errors
  node-json-schema node-json-schema-traverse node-json-stable-stringify
  node-json-stringify-safe node-jsonify node-jsonparse node-jsonstream
  node-jsprim node-latest-version node-lazy-property node-lcid node-libnpx
  node-locate-path node-lockfile node-lodash node-lodash-packages
  node-lowercase-keys node-lru-cache node-make-dir node-mem node-mime
  node-mime-types node-mimic-fn node-mimic-response node-mississippi
  node-move-concurrently node-ms node-mute-stream node-normalize-package-data
  node-npm-bundled node-npm-package-arg node-npm-run-path node-number-is-nan
  node-oauth-sign node-opener node-os-locale node-os-tmpdir node-osenv
  node-p-cancelable node-p-finally node-p-is-promise node-p-limit
  node-p-locate node-p-timeout node-package-json node-parallel-transform
  node-path-exists node-path-is-inside node-performance-now node-pify
  node-prepend-http node-promise-inflight node-promise-retry node-promzard
  node-proto-list node-prr node-pseudomap node-psl node-pump node-pumpify
  node-punycode node-qs node-qw node-read node-read-package-json
  node-registry-auth-token node-registry-url node-request
  node-require-directory node-require-main-filename node-resolve
  node-resolve-from node-retry node-run-queue node-semver-diff node-sha
  node-shebang-command node-shebang-regex node-slash node-slide
  node-sorted-object node-spdx-correct node-spdx-exceptions
  node-spdx-expression-parse node-spdx-license-ids node-sshpk node-ssri
  node-stream-each node-stream-iterate node-stream-shift
  node-strict-uri-encode node-strip-eof node-supports-color node-term-size
  node-text-table node-through node-through2 node-timed-out node-tough-cookie
  node-tunnel-agent node-tweetnacl node-typedarray node-typedarray-to-buffer
  node-uid-number node-unique-filename node-unique-string node-unpipe
  node-uri-js node-url-parse-lax node-url-to-options node-uuid
  node-validate-npm-package-license node-validate-npm-package-name node-verror
  node-which node-which-module node-widest-line node-wrap-ansi
  node-write-file-atomic node-xdg-basedir node-xtend node-y18n node-yargs
  node-yargs-parser nodejs-doc python-pkg-resources recordmydesktop
  swh-plugins
Use 'sudo apt autoremove' to remove them.
The following NEW packages will be installed:
  gnupg-agent
0 upgraded, 1 newly installed, 0 to remove and 37 not upgraded.
Need to get 5,236 B of archives.
After this operation, 46.1 kB of additional disk space will be used.
Do you want to continue? [Y/n] 
Get:1 http://br.archive.ubuntu.com/ubuntu focal/universe amd64 gnupg-agent all 2.2.19-3ubuntu2 [5,236 B]
Fetched 5,236 B in 0s (52.1 kB/s)       
Selecting previously unselected package gnupg-agent.
(Reading database ... 247844 files and directories currently installed.)
Preparing to unpack .../gnupg-agent_2.2.19-3ubuntu2_all.deb ...
Unpacking gnupg-agent (2.2.19-3ubuntu2) ...
Setting up gnupg-agent (2.2.19-3ubuntu2) ...
catalunha@stack:~$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
OK
catalunha@stack:~$ sudo add-apt-repository \
>    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
>    $(lsb_release -cs) \
>    stable"
Hit:1 http://br.archive.ubuntu.com/ubuntu focal InRelease
Hit:2 http://dl.google.com/linux/chrome/deb stable InRelease                   
Get:3 https://download.docker.com/linux/ubuntu focal InRelease [33.5 kB]       
Hit:4 http://br.archive.ubuntu.com/ubuntu focal-updates InRelease              
Hit:5 https://deb.nodesource.com/node_12.x focal InRelease                     
Hit:6 http://br.archive.ubuntu.com/ubuntu focal-backports InRelease            
Get:7 http://security.ubuntu.com/ubuntu focal-security InRelease [107 kB]      
Hit:8 http://ppa.launchpad.net/atareao/nemo-extensions/ubuntu focal InRelease 
Ign:9 https://storage.googleapis.com/download.dartlang.org/linux/debian stable InRelease
Get:10 https://download.docker.com/linux/ubuntu focal/stable amd64 Packages [536 B]
Hit:11 https://storage.googleapis.com/download.dartlang.org/linux/debian stable Release
Hit:13 http://ppa.launchpad.net/kdenlive/kdenlive-stable/ubuntu focal InRelease
Get:14 http://security.ubuntu.com/ubuntu focal-security/main amd64 DEP-11 Metadata [16.6 kB]
Get:15 http://security.ubuntu.com/ubuntu focal-security/universe amd64 DEP-11 Metadata [208 B]
Fetched 158 kB in 2s (78.0 kB/s)           
Reading package lists... Done
catalunha@stack:~$ sudo apt-get update
Hit:1 http://br.archive.ubuntu.com/ubuntu focal InRelease
Hit:2 http://br.archive.ubuntu.com/ubuntu focal-updates InRelease              
Hit:3 https://deb.nodesource.com/node_12.x focal InRelease                     
Hit:4 https://download.docker.com/linux/ubuntu focal InRelease                 
Hit:5 http://br.archive.ubuntu.com/ubuntu focal-backports InRelease            
Hit:6 http://dl.google.com/linux/chrome/deb stable InRelease                   
Hit:7 http://security.ubuntu.com/ubuntu focal-security InRelease               
Hit:8 http://ppa.launchpad.net/atareao/nemo-extensions/ubuntu focal InRelease
Ign:9 https://storage.googleapis.com/download.dartlang.org/linux/debian stable InRelease
Hit:10 https://storage.googleapis.com/download.dartlang.org/linux/debian stable Release
Hit:11 http://ppa.launchpad.net/kdenlive/kdenlive-stable/ubuntu focal InRelease
Reading package lists... Done
catalunha@stack:~$ sudo apt-get install docker-ce docker-ce-cli containerd.io
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Package docker-ce is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source

E: Package 'docker-ce' has no installation candidate
E: Unable to locate package docker-ce-cli
catalunha@stack:~$ sudo apt-get install docker-ce
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Package docker-ce is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source

E: Package 'docker-ce' has no installation candidate
catalunha@stack:~$ sudo nano /etc/apt/sources.list
catalunha@stack:~$ sudo nano /etc/apt/sources.list
catalunha@stack:~$ sudo apt update && sudo apt install docker-ce docker-ce-cli containerd.io
Hit:1 http://br.archive.ubuntu.com/ubuntu focal InRelease
Hit:2 http://br.archive.ubuntu.com/ubuntu focal-updates InRelease              
Hit:3 http://br.archive.ubuntu.com/ubuntu focal-backports InRelease            
Hit:4 http://dl.google.com/linux/chrome/deb stable InRelease                   
Hit:5 https://deb.nodesource.com/node_12.x focal InRelease                     
Hit:6 http://ppa.launchpad.net/atareao/nemo-extensions/ubuntu focal InRelease  
Hit:7 http://security.ubuntu.com/ubuntu focal-security InRelease               
Ign:8 https://storage.googleapis.com/download.dartlang.org/linux/debian stable InRelease
Hit:9 https://storage.googleapis.com/download.dartlang.org/linux/debian stable Release
Hit:10 http://ppa.launchpad.net/kdenlive/kdenlive-stable/ubuntu focal InRelease
Reading package lists... Done
Building dependency tree       
Reading state information... Done
37 packages can be upgraded. Run 'apt list --upgradable' to see them.
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Package docker-ce is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source

E: Package 'docker-ce' has no installation candidate
E: Unable to locate package docker-ce-cli
E: Unable to locate package containerd.io
catalunha@stack:~$ sudo apt-get update
Hit:1 http://br.archive.ubuntu.com/ubuntu focal InRelease
Hit:2 http://br.archive.ubuntu.com/ubuntu focal-updates InRelease              
Hit:3 http://br.archive.ubuntu.com/ubuntu focal-backports InRelease            
Hit:4 https://deb.nodesource.com/node_12.x focal InRelease                     
Hit:5 http://dl.google.com/linux/chrome/deb stable InRelease                   
Hit:6 http://security.ubuntu.com/ubuntu focal-security InRelease               
Hit:7 http://ppa.launchpad.net/atareao/nemo-extensions/ubuntu focal InRelease
Ign:8 https://storage.googleapis.com/download.dartlang.org/linux/debian stable InRelease
Hit:9 https://storage.googleapis.com/download.dartlang.org/linux/debian stable Release
Hit:11 http://ppa.launchpad.net/kdenlive/kdenlive-stable/ubuntu focal InRelease
Reading package lists... Done
catalunha@stack:~$ sudo apt-get install docker-ce docker-ce-cli containerd.io
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Package docker-ce is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source

E: Package 'docker-ce' has no installation candidate
E: Unable to locate package docker-ce-cli
E: Unable to locate package containerd.io
E: Couldn't find any package by glob 'containerd.io'
E: Couldn't find any package by regex 'containerd.io'
catalunha@stack:~$ sudo apt install docker.io
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following packages were automatically installed and are no longer required:
  dvdauthor dvgrab gyp libc-ares2 libjs-is-typedarray libjs-psl
  libjs-typedarray-to-buffer libquicktime2 libssl-dev libuv1-dev node-ajv
  node-ansi node-ansi-align node-ansi-styles node-ansistyles node-archy
  node-asap node-asn1 node-assert-plus node-asynckit node-aws-sign2 node-aws4
  node-bcrypt-pbkdf node-bl node-bluebird node-boxen node-builtins
  node-cacache node-call-limit node-camelcase node-caseless node-chalk
  node-ci-info node-cli-boxes node-cliui node-co node-color-convert
  node-color-name node-colors node-columnify node-combined-stream
  node-concat-stream node-config-chain node-configstore node-copy-concurrently
  node-cross-spawn node-crypto-random-string node-cyclist node-dashdash
  node-debug node-decamelize node-decompress-response node-define-properties
  node-delayed-stream node-detect-indent node-detect-newline node-dot-prop
  node-duplexer3 node-duplexify node-ecc-jsbn node-editor node-encoding
  node-end-of-stream node-err-code node-errno node-es6-promise
  node-escape-string-regexp node-execa node-extend node-extsprintf
  node-fast-deep-equal node-find-up node-flush-write-stream node-forever-agent
  node-form-data node-from2 node-fs-vacuum node-fs-write-stream-atomic
  node-function-bind node-genfun node-get-caller-file node-get-stream
  node-getpass node-got node-har-schema node-har-validator node-has-flag
  node-has-symbol-support-x node-has-to-string-tag-x node-hosted-git-info
  node-http-signature node-iconv-lite node-iferr node-import-lazy
  node-imurmurhash node-invert-kv node-ip node-ip-regex node-is-npm
  node-is-obj node-is-object node-is-path-inside node-is-plain-obj
  node-is-retry-allowed node-is-stream node-is-typedarray node-isexe
  node-isstream node-isurl node-jsbn node-json-parse-better-errors
  node-json-schema node-json-schema-traverse node-json-stable-stringify
  node-json-stringify-safe node-jsonify node-jsonparse node-jsonstream
  node-jsprim node-latest-version node-lazy-property node-lcid node-libnpx
  node-locate-path node-lockfile node-lodash node-lodash-packages
  node-lowercase-keys node-lru-cache node-make-dir node-mem node-mime
  node-mime-types node-mimic-fn node-mimic-response node-mississippi
  node-move-concurrently node-ms node-mute-stream node-normalize-package-data
  node-npm-bundled node-npm-package-arg node-npm-run-path node-number-is-nan
  node-oauth-sign node-opener node-os-locale node-os-tmpdir node-osenv
  node-p-cancelable node-p-finally node-p-is-promise node-p-limit
  node-p-locate node-p-timeout node-package-json node-parallel-transform
  node-path-exists node-path-is-inside node-performance-now node-pify
  node-prepend-http node-promise-inflight node-promise-retry node-promzard
  node-proto-list node-prr node-pseudomap node-psl node-pump node-pumpify
  node-punycode node-qs node-qw node-read node-read-package-json
  node-registry-auth-token node-registry-url node-request
  node-require-directory node-require-main-filename node-resolve
  node-resolve-from node-retry node-run-queue node-semver-diff node-sha
  node-shebang-command node-shebang-regex node-slash node-slide
  node-sorted-object node-spdx-correct node-spdx-exceptions
  node-spdx-expression-parse node-spdx-license-ids node-sshpk node-ssri
  node-stream-each node-stream-iterate node-stream-shift
  node-strict-uri-encode node-strip-eof node-supports-color node-term-size
  node-text-table node-through node-through2 node-timed-out node-tough-cookie
  node-tunnel-agent node-tweetnacl node-typedarray node-typedarray-to-buffer
  node-uid-number node-unique-filename node-unique-string node-unpipe
  node-uri-js node-url-parse-lax node-url-to-options node-uuid
  node-validate-npm-package-license node-validate-npm-package-name node-verror
  node-which node-which-module node-widest-line node-wrap-ansi
  node-write-file-atomic node-xdg-basedir node-xtend node-y18n node-yargs
  node-yargs-parser nodejs-doc python-pkg-resources recordmydesktop
  swh-plugins
Use 'sudo apt autoremove' to remove them.
The following additional packages will be installed:
  bridge-utils cgroupfs-mount containerd pigz runc ubuntu-fan
Suggested packages:
  ifupdown aufs-tools btrfs-progs debootstrap docker-doc rinse zfs-fuse
  | zfsutils
The following NEW packages will be installed:
  bridge-utils cgroupfs-mount containerd docker.io pigz runc ubuntu-fan
0 upgraded, 7 newly installed, 0 to remove and 37 not upgraded.
Need to get 69.3 MB of archives.
After this operation, 333 MB of additional disk space will be used.
Do you want to continue? [Y/n] 
Get:1 http://br.archive.ubuntu.com/ubuntu focal/universe amd64 pigz amd64 2.4-1 [57.4 kB]
Get:2 http://br.archive.ubuntu.com/ubuntu focal/main amd64 bridge-utils amd64 1.6-2ubuntu1 [30.5 kB]
Get:3 http://br.archive.ubuntu.com/ubuntu focal/universe amd64 cgroupfs-mount all 1.4 [6,320 B]
Get:4 http://br.archive.ubuntu.com/ubuntu focal/main amd64 runc amd64 1.0.0~rc10-0ubuntu1 [2,549 kB]
Get:5 http://br.archive.ubuntu.com/ubuntu focal/main amd64 containerd amd64 1.3.3-0ubuntu2 [27.8 MB]
Get:6 http://br.archive.ubuntu.com/ubuntu focal/universe amd64 docker.io amd64 19.03.8-0ubuntu1 [38.9 MB]
Get:7 http://br.archive.ubuntu.com/ubuntu focal/main amd64 ubuntu-fan all 0.12.13 [34.5 kB]
Fetched 69.3 MB in 6s (11.4 MB/s)                                              
Preconfiguring packages ...
Selecting previously unselected package pigz.
(Reading database ... 247848 files and directories currently installed.)
Preparing to unpack .../0-pigz_2.4-1_amd64.deb ...
Unpacking pigz (2.4-1) ...
Selecting previously unselected package bridge-utils.
Preparing to unpack .../1-bridge-utils_1.6-2ubuntu1_amd64.deb ...
Unpacking bridge-utils (1.6-2ubuntu1) ...
Selecting previously unselected package cgroupfs-mount.
Preparing to unpack .../2-cgroupfs-mount_1.4_all.deb ...
Unpacking cgroupfs-mount (1.4) ...
Selecting previously unselected package runc.
Preparing to unpack .../3-runc_1.0.0~rc10-0ubuntu1_amd64.deb ...
Unpacking runc (1.0.0~rc10-0ubuntu1) ...
Selecting previously unselected package containerd.
Preparing to unpack .../4-containerd_1.3.3-0ubuntu2_amd64.deb ...
Unpacking containerd (1.3.3-0ubuntu2) ...
Selecting previously unselected package docker.io.
Preparing to unpack .../5-docker.io_19.03.8-0ubuntu1_amd64.deb ...
Unpacking docker.io (19.03.8-0ubuntu1) ...
Selecting previously unselected package ubuntu-fan.
Preparing to unpack .../6-ubuntu-fan_0.12.13_all.deb ...
Unpacking ubuntu-fan (0.12.13) ...
Setting up runc (1.0.0~rc10-0ubuntu1) ...
Setting up bridge-utils (1.6-2ubuntu1) ...
Setting up pigz (2.4-1) ...
Setting up cgroupfs-mount (1.4) ...
Setting up containerd (1.3.3-0ubuntu2) ...
Created symlink /etc/systemd/system/multi-user.target.wants/containerd.service →
 /lib/systemd/system/containerd.service.
Setting up ubuntu-fan (0.12.13) ...
Created symlink /etc/systemd/system/multi-user.target.wants/ubuntu-fan.service →
 /lib/systemd/system/ubuntu-fan.service.
Setting up docker.io (19.03.8-0ubuntu1) ...
Adding group `docker' (GID 133) ...
Done.
Created symlink /etc/systemd/system/sockets.target.wants/docker.socket → /lib/sy
stemd/system/docker.socket.
docker.service is a disabled or a static unit, not starting it.
Processing triggers for systemd (245.4-4ubuntu3) ...
Processing triggers for man-db (2.9.1-1) ...
catalunha@stack:~$ docker -v
Docker version 19.03.8, build afacb8b7f0
catalunha@stack:~$ cd flutter-projects/
catalunha@stack:~/flutter-projects$ docker pull mongo
Using default tag: latest
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post http://%2Fvar%2Frun%2Fdocker.sock/v1.40/images/create?fromImage=mongo&tag=latest: dial unix /var/run/docker.sock: connect: permission denied
catalunha@stack:~/flutter-projects$ docker -v
Docker version 19.03.8, build afacb8b7f0
catalunha@stack:~/flutter-projects$ docker

Usage:	docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Options:
      --config string      Location of client config files (default
                           "/home/catalunha/.docker")
  -c, --context string     Name of the context to use to connect to the
                           daemon (overrides DOCKER_HOST env var and
                           default context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket(s) to connect to
  -l, --log-level string   Set the logging level
                           ("debug"|"info"|"warn"|"error"|"fatal")
                           (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default
                           "/home/catalunha/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default
                           "/home/catalunha/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default
                           "/home/catalunha/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Management Commands:
  builder     Manage builds
  config      Manage Docker configs
  container   Manage containers
  context     Manage contexts
  engine      Manage the docker engine
  image       Manage images
  network     Manage networks
  node        Manage Swarm nodes
  plugin      Manage plugins
  secret      Manage Docker secrets
  service     Manage services
  stack       Manage Docker stacks
  swarm       Manage Swarm
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  build       Build an image from a Dockerfile
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  deploy      Deploy a new stack or update an existing stack
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  images      List images
  import      Import the contents from a tarball to create a filesystem image
  info        Display system-wide information
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  login       Log in to a Docker registry
  logout      Log out from a Docker registry
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  ps          List containers
  pull        Pull an image or a repository from a registry
  push        Push an image or a repository to a registry
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  run         Run a command in a new container
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  search      Search the Docker Hub for images
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  version     Show the Docker version information
  wait        Block until one or more containers stop, then print their exit codes

Run 'docker COMMAND --help' for more information on a command.
catalunha@stack:~/flutter-projects$ sudo docker pull mongo
Using default tag: latest
latest: Pulling from library/mongo
23884877105a: Pull complete 
bc38caa0f5b9: Pull complete 
2910811b6c42: Pull complete 
36505266dcc6: Pull complete 
a4d269900d94: Pull complete 
5e2526abb80a: Pull complete 
d3eece1f39ec: Pull complete 
358ed78d3204: Pull complete 
1a878b8604ae: Pull complete 
dde03a2883d0: Pull complete 
4ffe534daa34: Pull complete 
f164ba21e17c: Pull complete 
6494c387442c: Pull complete 
Digest: sha256:c880f6b56f443bb4d01baa759883228cd84fa8d78fa1a36001d1c0a0712b5a07
Status: Downloaded newer image for mongo:latest
docker.io/library/mongo:latest
catalunha@stack:~/flutter-projects$ docker run --name mongodb -p 27017:27017 -d mongo
docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/create?name=mongodb: dial unix /var/run/docker.sock: connect: permission denied.
See 'docker run --help'.
catalunha@stack:~/flutter-projects$ sudo docker run --name mongodb -p 27017:27017 -d mongo
ff4416dd943789b9e5ca0b0606ae129824416d8715f067d04b7bac07b20412f9
catalunha@stack:~/flutter-projects$ docker ps
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/json: dial unix /var/run/docker.sock: connect: permission denied
catalunha@stack:~/flutter-projects$ sudo docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
ff4416dd9437        mongo               "docker-entrypoint.s…"   49 seconds ago      Up 42 seconds       0.0.0.0:27017->27017/tcp   mongodb
catalunha@stack:~/flutter-projects$ 



~~~