/**
 * Created by msi on 09/02/2017.
 */
/*function math(a,b,c) {
    if (isNaN(a,b,c)){
        throw new Error('a,b,c are not number');
    }

    if (a === 0) {
        throw new Error('a equal to zero');
    }

    let delta = (b * b) - (4 * a * c);
    if (delta < 0) {
        throw new Error('delta less than zero')
    } else if (delta == 0){
        return x = -b / (2 * a);
    } else if (delta > 0){
        return x = [(-b - Math.sqrt(delta)) / (2 * a), (-b + Math.sqrt(delta)) / (2 * a)];
    }
}*/

exports.findX = (a, b, c) => {
    if (isNaN(a,b,c)){
        throw new Error('a,b,c are not number');
    }

    if (a === 0) {
        throw new Error('a equal to zero');
    }

    let delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        throw new Error('delta less than zero');
    }

    let sqrtDelta = Math.sqrt(delta);
    return [(-b - sqrtDelta) / (2 * a), (-b + sqrtDelta) / (2 * a)];

    //return y = [(a * x * x) + (b * x) + c];
};


exports.findY = (a,b,c,x) => {
    return (a * x * x) + (b * x) + c;
};
