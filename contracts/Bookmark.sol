pragma solidity ^0.4.17;

contract Bookmark {
    mapping (address => string) private bookmarks;
    address public owner;

    function Bookmark() public {
        owner = msg.sender;
    }
    function bookmark(string show) public returns(string) {
        bookmarks[msg.sender] = show;
        return bookmarks[msg.sender];
    }
    function getBookmarks() public constant returns(string) {
        return bookmarks[msg.sender];
    }

}