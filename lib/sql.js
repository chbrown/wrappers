// var pg = require('pg');

exports.querySqlDb = function(db, pg) {
  // a closure;
  //   signature: function(sql, args, callback, client)
  //   callback signature: callback(result, client)
  // errors are swallowed to the console
  return function(sql, args, callback, client) {
    if (client === undefined) {
      pg.connect(db, function(err, client) {
        if (err) console.log(err);
        client.query(sql, args, function(err, result) {
          if (err) console.log(err);
          if (callback) callback(result, client);
        });
      });
    }
    else {
      client.query(sql, args, function(err, result) {
        if (err) console.log(err);
        if (callback) callback(result, client);
      });
    }
  };
};
