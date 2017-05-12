function dEqualsVT(velocity, time){
    return velocity*time;
}
function vEqualsDOverT(distance, time){
    return distance/time;
}
function tEqualsDOverV(distance, velocity){
    return distance/velocity;
}
function vFEqualsViPlusAT(vi, a, t){
    return vi+(a*t);
}
function vIEqualsVfMinusAT(vf, a, t){
    return vf-(a*t);
}
function aEqualsVOverT(velocity, time){
    return velocity/time;
}
function vEqualsAT(acceleration, time){
    return acceleration*time;
}
function tEqualsVOverA(velocity, acceleration){
    return velocity/acceleration;
}
function dEqualsHalfATSquaredPlusViT(a,t,vi, t){
    return ((a*t*t)+(vi*t))/2;
}
