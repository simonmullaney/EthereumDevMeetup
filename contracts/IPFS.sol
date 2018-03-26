pragma solidity ^0.4.10;

import "./usingOraclize.sol";

//contract extends usingOraclize contract
contract ipfs is usingOraclize {
  bytes32 public oraclizeID;
  string public results;
  event LogOraclizeResult(string result);

  //constructor put printed line from ethereum bridge in here!
  function ipfs(){
      OAR = OraclizeAddrResolverI(0x6D749748DB7e336bF4423fDc19a29bCA27bd3751);
  }
  //QmautuU5VBF9KgYvhM5eB4VkXjMURXKVGEZWWWCcUxfVHy is the hash of 'Ethereum Meetup 28 march\n' file stored on IPFS
  function getIPFSData() {
      oraclize_query("IPFS", "QmautuU5VBF9KgYvhM5eB4VkXjMURXKVGEZWWWCcUxfVHy");
  }

  function __callback(bytes32 myid, string result) {
      require (msg.sender == oraclize_cbAddress());
      results = result;
      // Trigger event
      LogOraclizeResult(result);
  }

  //fallback function
  function () payable{

  }
}
