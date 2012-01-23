var Book = require('../book');

describe('Book', function() {

  var now, book;

  describe('.factory()', function() {

    before(function() {
      now = new Date();
      book = Book.factory({title: "foo", url: "http://test.com", timestamp: now });
    });

    it('returns a new Book', function() {
      book.title.should.eql("foo");
      book.url.should.eql("http://test.com");
      book.timestamp.getFullYear().should.eql(now.getFullYear());
    });
  });
});
