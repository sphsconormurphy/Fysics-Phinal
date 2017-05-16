var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
  return v*t;
};
exports.distance1 = function(a, t, vi){
  return ((a*t*t)+(vi*t))/2;
};
exports.velocity = function(d, t){
  return d/t;
};
exports.velocity1 = function(t, a){
  return t*a;
};
exports.time = function(d,v){
  return d/v;
};
exports.time1 = function(t, a){
  return v/a;
};
exports.acceleration = function(v, t){
  return v/t;
};
