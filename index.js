var bot = require('./bot');

var xml = require("fs").readFileSync(__dirname + '/test/fixtures/oreilly.atom');

bot.parse(xml, function(books) {
  books.forEach(function(book) {
    console.log('\n%s\n%s\n%s\n', book.timestamp, book.title, book.url);
  });
});
