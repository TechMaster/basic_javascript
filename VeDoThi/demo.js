/**
 * Created by msi on 09/02/2017.
 */
/***
 * Solve Quadratic, find values range of x,y to draw chart
 */
const math = require('./giaiPT');
const readlineSync = require('readline-sync');
const log = console.log;
let plotly = require('plotly')('tungpt7','nMEIrgmKOzhOs7WjNBdw');
let fs = require('fs');
/***
 * convert string to double
 * @param input_string
 * @returns {Number}
 */
const convert_to_double = (input_string) => {
    return parseFloat(input_string);
};

/***
 * get data from user
 * @param message
 * @param validate_func
 * @returns {*}
 */
const readInput = (message, validate_func) => {
    let answer = readlineSync.question(message);
    if (answer === 'q') {
        throw new Error('quit');
    }
    return validate_func(answer);
};

loop_solve_equation = () => {
    let a, b, c;
    try {
        a = readInput('Enter a: ',convert_to_double);
        b = readInput('Enter b: ',convert_to_double);
        c = readInput('Enter c: ',convert_to_double);
    }catch (err) {
        return;
    }

    try {
        let x_array;
        log('Result x: ', x_array = math.findX(a,b,c));

        let X1 = x_array.pop() - 5;
        let X2 = x_array.pop() + 5;

        let x = X1, y_series = [], x_series = [], step = 0.1;
        while (x < X2) {
            y_series.push(math.findY(a,b,c,x));
            x_series.push(x);
            x += step;
        }
        //log(x_series, y_series);
        return x_series, y_series;

        let trace = {
            x: x_series,
            y: y_series,
            type: "scatter"
        };

        let figure = { 'data': [trace] };

        let imgOpts = {
            format: 'png',
            width: 1000,
            height: 500
        };

        plotly.getImage(figure, imgOpts, function (error, imageStream) {
            if (error) return console.log (error);

            let fileStream = fs.createWriteStream('1.png');
            imageStream.pipe(fileStream);
        });

    }catch (err){
        log('Error: ', err.message);
    }

    loop_solve_equation();
};

log('Enter "q" to quit');
log('f(x): ax^2 + bx + c = 0');
loop_solve_equation();
