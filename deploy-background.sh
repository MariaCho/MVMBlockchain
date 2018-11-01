#!/bin/bash

# kill previous rest server process
kill -9 $(cat rest_port.txt)

# clean all docker containers and images
docker kill $(docker ps -q)
docker rm $(docker ps -aq)
docker rmi $(docker images dev-* -q)

# set Fabric version to 1.2
# (composer 0.20.x is compatible with fabric 1.2 only)
export FABRIC_VERSION=hlfv12

# go to the folder containing the Fabric scripts
cd $HOME/fabric-dev-servers/

# restart Fabric
./stopFabric.sh
./startFabric.sh

# create (or re-create) Peer Admin business card
./createPeerAdminCard.sh

# cd to the repository containing the Composer project
cd $HOME/Documents/mvm-blockchain/

# create the BNA
composer archive create -t dir -n .

# deploy the blockchain to Fabric based on BNA
composer network install -c PeerAdmin@hlfv1 -a mvm-blockchain@0.0.1.bna
composer network start -n mvm-blockchain -V 0.0.1 -A admin -S adminpw -c PeerAdmin@hlfv1 -f networkadmin.card
composer card import -f networkadmin.card

# generate REST server for the now deployed blockchain
nohup composer-rest-server -c admin@mvm-blockchain -n never -a false -w true -t false -p $BLOCKCHAIN_PORT > rest_out.txt &
echo $! > rest_port.txt
