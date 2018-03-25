var Migrations = artifacts.require("./Migrations.sol");
var ipfs = artifacts.require("./IPFS.sol");



module.exports = function(deployer) {
  deployer.deploy(ipfs);
};
