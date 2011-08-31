JSON.parseWithDefault = function(str, default_obj) {
  try { return JSON.parse(str) }
  catch (e) { return default_obj }
};
