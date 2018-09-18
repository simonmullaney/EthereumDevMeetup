var Migrations = artifacts.require("./Migrations.sol");
var ipfs = artifacts.require("./IPFS.sol");
var usingOraclize = artifacts.require("./usingOraclize.sol")


module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(usingOraclize).then(function() {
    return deployer.deploy(ipfs, usingOraclize.address);
  });


};
