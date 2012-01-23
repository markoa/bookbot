var http = require('http-get');
var bot = require('./bot');

var FEEDS = [
  'feeds.feedburner.com/oreilly/newbooks',
  'www.pragprog.com/feed/global'
];

FEEDS.forEach(function(feedUrl) {

  http.get({ url: feedUrl }, function(error, result) {
    if (error) {
      console.error(error);
    } else {
      bot.parse(result.buffer, function(books) {
        books.forEach(function(book) {
          console.log('\n%s\n%s\n%s\n', book.timestamp, book.title, book.url);
        });
      });
    }
  });
});
