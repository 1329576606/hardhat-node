FROM node:16
ADD . /hardhat
WORKDIR /hardhat
CMD npx hardhat node --hostname 0.0.0.0