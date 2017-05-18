var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
  return v*t;
};
exports.distance1 = function(v,a,t){
  return ((a*t*t)+(v*t))/2;
};
exports.velocity = function(d,t){
  return d/t;
};
exports.velocity1 = function(a,t){
  return t*a;
};
exports.time = function(d,v){
  return d/v;
};
exports.time1 = function(v,a){
  return v/a;
};
exports.acceleration = function(v,t){
  return v/t;
};
