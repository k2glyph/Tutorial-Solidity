const Bookmark = artifacts.require('Bookmark');
const assert = require('assert');

contract('Bookmark', function(accounts) {
  
  const item1 ={
    "title":"Nepallink",
    "image_url":"http://www.wia.org.au/newsevents/news/2016/20160125-1/images/image_1_hires.jpg"
  };

  const item2 ={
    "title":"Nepallink",
    "image_url":"http://www.wia.org.au/newsevents/news/2016/20160125-1/images/image_1_hires.jpg"
  };

  it("should insert item1 and test is there only item or not", function(done) {
    Bookmark.deployed().then((instance)=> {
      instance.bookmark(JSON.stringify(item1), { from: accounts[0]})
      return instance.getBookmarks.call();
    }).then((response) => {
      assert.equal(response, JSON.stringify(item1));
    });
    done();
  });
  it("should insert item1, item2 and test is there a array containing of item1 and item2 or not", function(done) {
    Bookmark.deployed().then((instance)=> {
      instance.bookmark(JSON.stringify([item1, item2]), { from: accounts[0]})
      return instance.getBookmarks.call();
    }).then((response) => {
      assert.equal(response, JSON.stringify([item1, item2]));
    });
    done();
  });
});
