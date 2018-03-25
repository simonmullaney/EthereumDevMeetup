module.exports = {
  networks: {
    development: {
      host: "localhost",     //may be localhost - I'm running testrpc (ganache) on a docker image
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
