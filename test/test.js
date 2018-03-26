var ipfs = artifacts.require("./IPFS.sol")

contract('ipfs', function(accounts) {

  let Simon = '0x9e575aef89cffe9db726012415fc02f6a5c2bfa0';
  var instance

  it("should send ether to contract adress so we can use the orcalize service",function(){
      var lease
      return ipfs.deployed()
      .then(function(instance) {
          //Send eth from my account (First account given in testrpc) to the contract adress
          return web3.eth.sendTransaction({from: Simon, to: instance.address, value: web3.toWei(1,'ether'), gas: 4000000});
      })
  })

// Test to check ability to retrive file from IPFS
it("should retrive file from IPFS", function () {
    var contract
    return ipfs.deployed()
    .then(function(instance){
        contract = instance;
        return contract.getIPFSData()
    }).then(function(){
        //Set timeout of 10 seconds to give th oraclize service enough time to return result
        return new Promise(resolve => setTimeout(resolve, 10000));
    }).then(function(){
        //call results variable that the result of the oraclize service was stored
        return contract.results.call()
    }).then(function(res){
        return assert.equal('Ethereum Meetup 28 march\n', res, "not working!!")
    })
  })
})
