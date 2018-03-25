var ipfs = artifacts.require("./IPFS.sol")

contract('ipfs', function(accounts) {  // like describe but contract redeploys the contracts
  //console.log(accounts);
  let Simon = '0x9e575aef89cffe9db726012415fc02f6a5c2bfa0';
  var instance

  //testing
/*
  it("should unlock the account",function(){
    return ipfs.deployed()
    .then(function(instance) {
    lease = instance;
    return web3.eth.personal.unlockAccount(Simon)
  })
})
*/
  it("should send ether to contract adress so we can use the orcalize service",function(){
    var lease
    return ipfs.deployed()
    .then(function(instance) {
    lease = instance;
    return web3.eth.sendTransaction({from: Simon, to: instance.address, value: web3.toWei(1,'ether'), gas: 4000000});
  }).then(function(res){
      console.log(res);
  })
})

// Test to check ability to retrive file from IPFS
it("should retrive file from IPFS", function () {
    var contract
    return ipfs.deployed()
    .then(function(instance){
      contract = instance;
      //console.log(instance);
      //console.log(instance.result)
      return contract.getIPFSData()
    }).then(function(){
    return new Promise(resolve => setTimeout(resolve, 10000));
    }).then(function(){
      console.log(contract);
      return contract.results.call()
    }).then(function(res){

      return assert.equal('100-CI-T01', res, "not working!!")
    })
})


})
