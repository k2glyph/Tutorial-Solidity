pragma solidity ^0.4.17;

contract HelloEthSalon {
    string private message="Hello world";
    function HelloEthSalon() public {
        //Constructor
    }

    function getMessage() public view returns(string) {
        return message;
    }
}