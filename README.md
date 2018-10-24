# MVMBlockchain

Stores information about technical parameters regarding electricity generation elements using blockchain.

## Deployment

### Pre-requisites
The blockchain is specified using Hyperledger Composer and the deployment runs on Hyperledger Fabric. The following are the tools (with versions) required to correctly install these, based on both the ones listed by the [official documentation](https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html) and our personal experience:

| Name                                  | Version                         |
|---------------------------------------|---------------------------------|
| Ubuntu                                | 14.04 or 16.04 (both 64-bit)    |
| Docker                                | 17.03 or higher                 |
| Docker Compose                        | 1.8 or higher                   |
| Node.js                               | 8.9x with x >= 9                |
| Node Package Manager (NPM)            | 5.x                             |
| Git                                   | 2.8.x or higher                 |
| Python                                | 2.7.x                           |

**Note:** all the dependencies must *not* require root access to run (note that this is common for Docker and NPM to do under default installations).

#### Instalation
These are fairly straight forward so no further instructions will be given.


### Development tools
Like we already mentioned, we need (mainly) Hyperledger Composer and Fabric. The [official documentation](https://hyperledger.github.io/composer/latest/installing/development-tools.html) suggests some additional tools. Although these tools are used for development, there aren't other methods for deployment (at least not in the case of on premise). Here's the full list:

#### Hyperledger Composer

| Name                                  | Version                         |
|---------------------------------------|---------------------------------|
| Hyperledger Composer CLI              | 0.20.x                          |
| Hyperledger Composer REST Server      | 0.20.x                          |
| Hyperledger Composer Generator        | 0.20.x                          |
| Yeoman                                | 2.0.5                           |

##### Instalation

```
$ npm install -g composer-cli@0.20
$ npm install -g composer-rest-server@0.20
$ npm install -g generator-hyperledger-composer@0.20
$ npm install -g yo@2.0.5
```

#### Hyperledger Fabric
The suggested installation directory is `~/fabric-dev-servers`. If you agree, Fabric can be installed by just running a few commands that will download it into the specified directory.

##### Installation

```
$ mkdir -p ~/fabric-dev-servers
$ cd ~/fabric-dev-servers
$ curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
$ tar -xvf fabric-dev-servers.tar.gz
$ export FABRIC_VERSION=hlfv12
$ ./downloadFabric.sh
```


### Running the network

##### Start/Restart Hyperledger Fabric

```
$ cd ~/fabric-dev-servers
$ export FABRIC_VERSION=hlfv12
$ ./stopFabric.sh
$ ./startFabric.sh
```

##### Delete all cards
It's possible to see all cards by running 

```
composer card list
```

After this, we'll need to delete them one by one using

```
$ composer card delete -c <Card Name>
```

##### Create Peer Admin Card

```
$ cd ~/fabric-dev-servers
$ export FABRIC_VERSION=hlfv12
$ ./createPeerAdminCard.sh
```

##### Generate Business Network Archive
Assuming this repository's file are stored at `~/Documents/mvm-blockchain`


```
$ cd ~/Documents/mvm-blockchain
$ composer archive create -t dir -n .
```

##### Deploy to Fabric
Once again, assuming this repository's file are stored at `~/Documents/mvm-blockchain`

```
$ cd ~/Documents/mvm-blockchain
$ composer network install -c PeerAdmin@hlfv1 -a mvm-blockchain@0.0.1.bna
$ composer network start -n mvm-blockchain -V 0.0.1 -A admin -S adminpw -c PeerAdmin@hlfv1 -f networkadmin.card
$ composer card import -f networkadmin.card
$ composer network ping -c admin@mvm-blockchain
```

##### Generate and run REST server
```
composer-rest-server -c admin@mvm-blockchain -n never -a false -w true -t false
```
 
