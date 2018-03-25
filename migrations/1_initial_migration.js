var Migrations = artifacts.require("./Migrations.sol");
var ipfs = artifacts.require("./IPFS.sol");
var usingOraclize = artifacts.require("./usingOraclize.sol")


module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ipfs);
  deployer.deploy(usingOraclize);

};
