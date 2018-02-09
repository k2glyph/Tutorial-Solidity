var Migrations = artifacts.require("./Migrations.sol");
var HelloEthSalon = artifacts.require('./HelloEthSalon.sol');
var Bookmark = artifacts.require('./Bookmark.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(HelloEthSalon);
  deployer.deploy(Bookmark);
};
