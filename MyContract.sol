pragma solidity ^0.8.0;

contract FreeToken{
    mapping(address => uint256) balances;

    uint256 public totalSupply = 0;

    function balancOf (address _wallet) external view returns (uint256){
        return balances[_wallet];
    }

    function mint() external {
        balances[msg.sender] += 1;
        totalSupply += 1;
    }

    function transfer(address _to, uint256 _amount) external {

        require(_amount > 0, "Amount must be nonzero");
        require(balances[msg.sender] >= _amount, "Insufficient Balance");

        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    } 

}
