// additive
exports.http = require("./lib/http");
exports.mongo = require("./lib/mongo");
exports.sql = require("./lib/sql");
exports.cookies = require("./lib/cookies");

// destructive
exports.array = require("./lib/array");
exports.date = require("./lib/date");
exports.json = require("./lib/json");
exports.numbers = require("./lib/numbers");
exports.string = require("./lib/string");

exports.countdown = function(total, callback) {
  var callback_args = Array.prototype.slice.call(arguments, 2);
  return function() {
    if (!--total) {
      callback.apply(null, callback_args);
    }
  };
};

