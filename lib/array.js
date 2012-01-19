Array.prototype.first = function() {
  return this[0];
};

Array.prototype.last = function() {
  return this[this.length - 1];
};

Array.prototype.contains = function(test) {
  // returns a boolean. exits a.s.a.p., when successful.
  for (var i = 0, len = this.length; i < len; i++) {
    if (this[i] === test) {
      return true;
    }
  }
  return false;
};


Array.prototype.shuffle = function() {
  // this is not destructive! but it only returns a SHALLOW copy
  // http://sedition.com/perl/javascript-fy.html
  var copy = this.slice(0);
  var i = copy.length;
  if (i === 0)
    return [];
  while (--i) {
    var j = Math.floor(Math.random() * (i + 1));
    var tempi = copy[i];
    var tempj = copy[j]; // necessary to split?
    copy[i] = tempj;
    copy[j] = tempi;
  }
  return copy;
};

// non-destructive, but shallow copies only!
Array.prototype.sample = function(count, replacement) {
  // replacement: true if you're okay with duplicates, false if you want uniques (based on array)
  var total = this.length;
  if (count > total)
    replacement = true;
  var samples = [];
  var remaining_slots = count;
  if (replacement === undefined || replacement) {
    for (; remaining_slots > 0; remaining_slots--) {
      samples.push(this[Math.floor(Math.random() * total)]);
    }
  }
  else {
    // replacement = false, so we have to pick uniques, randomly.
    // var samples_count = 0
    // this is a finite loop, so it can return less than count, in bad situations
    for (var i = 0; i < 100000 && remaining_slots > 0; i++) {
      if (total < 200) {
        var shuffled = this.shuffle();
        if (shuffled.length > remaining_slots) {
          samples = samples.concat(shuffled.slice(shuffled.length - remaining_slots));
          remaining_slots = 0;
        }
        else {
          samples = samples.concat(shuffled);
          remaining_slots -= shuffled.length;
        }
      }
      else {
        // this will likely bog down when it gets to the last few elements if count == total > 200
        var candidate = this[Math.floor(Math.random() * total)];
        if (samples.indexOf(candidate) === -1) {
          samples.push(candidate);
          remaining_slots--;
        }
      }
    }
  }
  return samples;
};
