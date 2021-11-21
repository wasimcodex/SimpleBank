// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Bank {

    // Mapping of user address to their balance
    mapping(address => uint256) private balance;
    

    // Deposit function (payable)
    function deposit() public payable {
        require(msg.value > 0);
        
        if (balance[msg.sender] > 0) {
            balance[msg.sender] = balance[msg.sender] + msg.value;
        }else{
            balance[msg.sender] = msg.value;
        }
    }

    // Withdraw function (payable)
    function withdraw(uint256 amount) public payable {
        address payable client = msg.sender;
        require(balance[msg.sender] >= amount);
        client.transfer(amount);
        balance[msg.sender] = balance[msg.sender] - amount;
    }

    // Check balance function (view)
    function getBalance() public view returns(uint256){
        return (balance[msg.sender]);
    }
}