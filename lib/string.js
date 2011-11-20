String.prototype.append = function(str) {
  this += str; // destructive!
  return this; // chain
};

String.prototype.equals = function(test) {
  return this.valueOf() === test;
};

String.prototype.trim = String.prototype.strip = function() {
  return this.replace(/^\s+|\s+$/g, '');
};

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.titleize = function() {
  return this.split(' ').map(function(part) { return part.capitalize(); }).join(' ');
};

String.prototype.humanize = function() {
  return this.replace('_', ' ').titleize();
};

String.prototype.smartTitleize = function() {
  /* To Title Case 1.1.1
   * David Gouch <http://individed.com>
   * 23 May 2008
   * License: http://individed.com/code/to-title-case/license.txt
   *
   * In response to John Gruber's call for a Javascript version of his script: 
   * http://daringfireball.net/2008/05/title_case
   */
  return this.replace(/([\w&`'‘’"“.@:\/\{\(\[<>_]+-? *)/g, function(match, p1, index, title) {
    if (index > 0 && title.charAt(index - 2) !== ":" &&
      match.search(/^(a(nd?|s|t)?|b(ut|y)|en|for|i[fn]|o[fnr]|t(he|o)|vs?\.?|via)[ \-]/i) > -1)
        return match.toLowerCase();
    if (title.substring(index - 1, index + 1).search(/['"_{(\[]/) > -1)
        return match.charAt(0) + match.charAt(1).toUpperCase() + match.substr(2);
    if (match.substr(1).search(/[A-Z]+|&|[\w]+[._][\w]+/) > -1 || 
      title.substring(index - 1, index + 1).search(/[\])}]/) > -1)
        return match;
    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

String.prototype.humanize = function() {
  return this.replace('_', ' ').titleize();
};
