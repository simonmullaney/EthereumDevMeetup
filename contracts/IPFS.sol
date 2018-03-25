pragma solidity ^0.4.10;

import "./usingOraclize.sol";

contract ipfs is usingOraclize {
  bytes32 public oraclizeID;
  uint256 public i = 1;
  bool a = false;
  //event LogPriceUpdated(string price);

  //mapping for oracle results
  string public results;

  function ipfs(){
      OAR = OraclizeAddrResolverI(0x6D749748DB7e336bF4423fDc19a29bCA27bd3751);
  }

  function getIPFSData() {
      oraclize_query("IPFS", "QmNvS8VxxamhbVTStLv7NPSV1f7QkDYnbtAmpMnPCj3Dri");
    }

  function __callback(bytes32 myid, string result) {
      require (msg.sender == oraclize_cbAddress());
      results = result;
        //LogPriceUpdated(result);
    }

  //fallback function
  function () payable{

  }
}
