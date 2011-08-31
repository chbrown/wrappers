function insertThousandsDelimiters(string) {
  var splits = string.split('.');
  splits[0] = splits[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  return splits.join('.');
};

Number.prototype.toStringWithDelimiter = function() {
  return insertThousandsDelimiters(this + '');
};
Number.prototype.toCurrency = function(precision) {
  if (precision === undefined) { precision = 2; }
  return '$' + insertThousandsDelimiters(this.toFixed(precision));
};
Number.prototype.lt = function(comparison) {
  return this.valueOf() < comparison;
};
Number.prototype.gt = function(comparison) {
  return this.valueOf() > comparison;
};
