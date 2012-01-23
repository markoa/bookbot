var NodePie = require('nodepie');
var async = require('async');
var Book = require('./book');

function feedItemIterator(item, callback) {
  var error;
  var url = item.element.id;

  if (url === undefined) url = item.getPermalink();

  callback(error, Book.factory({ title: item.getTitle(), url: url, timestamp: item.getDate() }));
}

function parse(xml, callback) {
  var feed = new NodePie(xml);

  feed.init();
  async.map(feed.getItems(), feedItemIterator, function(err, books) { callback(books); });
}

exports.parse = parse;
