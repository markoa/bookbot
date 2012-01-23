var http = require('http-get');
parser = require('./parser')

var FEEDS = [
  'feeds.feedburner.com/oreilly/newbooks',
  'www.pragprog.com/feed/global'
];

function work() {
  FEEDS.forEach(function(feedUrl) {

    http.get({ url: feedUrl }, function(error, result) {
      if (error) {
        console.error(error);
      } else {
        parser.parse(result.buffer, function(books) {
          books.forEach(function(book) {
            console.log('\n%s\n%s\n%s\n', book.timestamp, book.title, book.url);
          });
        });
      }
    });
  });
}

exports.work = work;
