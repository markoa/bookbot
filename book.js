var Book = function(title, url, timestamp) {
  this.title = title;
  this.url = url;
  this.timestamp = timestamp;
}

var exports = module.exports;

exports.factory = function(options) {
  return new Book(options.title, options.url, options.timestamp);
};
