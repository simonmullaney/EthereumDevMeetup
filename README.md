
#Ethereum Development Meetup Wednesday, March 28, 2018 - Simple IPFS file retrieval using truffle, ganache and oraclize

Install dependencies:

Use node v 6.9.1
```
nvm install 6.9.1
```

install ganache:
```
npm install -g ganache-cli
```

install truffle:

```
npm install -g truffle
```

Install IPFS -> https://ipfs.io/docs/install/


Clone this directory:

```
git clone https://github.com/simonmullaney/EthereumDevMeetup.git
cd EthereumDevMeetup
```

Within the project directory clone ethereum-bridge and `npm install` its dependencies:

```
git clone https://github.com/oraclize/ethereum-bridge.git
cd ethereum-bridge
npm install
```

In a new window in your terminal start ganache-cli unlocking account 0 and 1

```
ganache-cli -u 0 -u 1
```

This will give you ten accounts with test ether in them to play around with

In another terminal window cd into the ethereum-bridge folder that we just cloned and run:

```
node bridge -H localhost:8545 -a 1
```

copy and paste the line it prints and put it in your constructor of IPFS.sol. It should be something like:

```
    OAR = OraclizeAddrResolverI(0x6D749748DB7e336bF4423fDc19a29bCA27bd3751);
```

Leave this terminal running

In another terminal run:

```
ipfs daemon
```

This will start the IPFS daemon running so that we can add the file to the IPFS network

Then run `ipfs add IPFS.txt` in the root of the project directory.

This should return you a hash of the file.

In order for the test file to work for you you will have to replace the account Simon with the address given by the first account when you ran `ganache-cli -u 0 -u 1`.

Then in the root of the project directory run:

```
truffle test
```

you should then see the output:

```
Contract: ipfs
  ✓ should send ether to contract adress so we can use the orcalize service (214ms)
  ✓ should retrive file from IPFS (10222ms)


2 passing (10s)
```
