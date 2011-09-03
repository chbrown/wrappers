JSON.parseWithDefault = function(str, default_obj) {
  try { return JSON.parse(str) }
  catch (e) { return default_obj }
};

JSON.tabStringify = function(obj) {
  return JSON.stringify(obj, null, '\t');
};
