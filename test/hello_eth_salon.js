const HelloEthSalon = artifacts.require("HelloEthSalon");
const assert = require('assert');

contract('HelloEthSalon:getMessage', function(accounts) {
  it("should assert true", async function() {
    HelloEthSalon.deployed((instance)=> {
      return instance.getMessage().call();
    }).then((response)=> {
      assert.isTrue(response=== 'Hello world');
    });
  });
});
