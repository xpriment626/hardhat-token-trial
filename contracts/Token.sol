// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import 'hardhat/console.sol';

contract Token 
{
    string public name = "Gobo Cash";
    string public symbol = "GSP";
    uint256 public totalSupply = 100000000;
    address public owner;
    mapping(address => uint256) balances;

    constructor()
    {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address _to, uint256 _amount) external
    {
        console.log('Sender balance is %s tokens', balances[msg.sender]);
        console.log('Trying to send %s tokens to %s', _amount, _to);
        require(balances[msg.sender] >= _amount, 'Not enough tokens');
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }

    function balanceOf(address _account) external view returns(uint256)
    {
        return balances[_account];
    }
}