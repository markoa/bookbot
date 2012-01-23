var parser = require('../parser');
var fs = require('fs');

describe('parser', function() {

  describe('.parse()', function() {
    
    var xml;

    before(function() {
      xml = fs.readFileSync(__dirname + '/fixtures/oreilly.atom', 'utf-8');
    });

    it('parses given xml and returns an array of book objects', function(done) {

      var books = parser.parse(xml, function(books) {
        books.length.should.eql(15);

        books[0].title.should.eql('Building Android Apps with HTML, CSS, and JavaScript');
        books[0].url.should.eql('http://oreilly.com/catalog/9781449316419/');
        books[0].timestamp.getDate().should.eql(23);
        done();
      });
    });
  });
});
