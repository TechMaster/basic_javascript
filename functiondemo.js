/**
 * Created by techmaster on 2/8/17.
 */

/***
 * Calculate factorial of n
 * @param n {Number} n must be integer and greater than zero
 */
function factorial(n) {
  if (isNaN(n)) {
    throw new Error('n is not a number');
  }

  if (n === 0) return 1;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

//Assign function as variable
let giaithua = factorial;

const log = console.log;  //Giúp viết tên hàm ngắn lại
//console.log(factorial('Hack'));

console.log(giaithua(5));


class Math {
  /***
   * object method
   * @param n
   * @returns {number}
   */
  factorial(n) {
    if (isNaN(n)) {
      throw new Error('n is not a number');
    }

    if (n === 0) return 1;

    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }



  /***
   * static method can be only used at class level not object level
   * @param n
   * @returns {number}
   */
  static getAbsoluteValue(n) {
    if (isNaN(n)) {
      throw new Error('n is not a number');
    }
    return (n > 0) ? n : -n;
  }


}

let math = new Math();  //Math is class definition, math is object
log(math.factorial(6));

log(Math.getAbsoluteValue(-19));
//log(math.getAbsoluteValue(-12));

//Tạo ra một property trong đối tượng math và gán function factorial vào
math.giaithua = factorial;

log(math.giaithua(5));

//Gán một static method vào một propery trong đối tượng
math.giatrituyetdoi = Math.getAbsoluteValue;
log(math.giatrituyetdoi(-100));


//Gán một static method vào một object method
math.factorial = Math.getAbsoluteValue;
log(math.factorial(-999));

//Gán một function vào một static method
Math.getAbsoluteValue = factorial;

log(Math.getAbsoluteValue(3));  //chạy code tính giai thừa của function factorial global


log(math.factorial(-5));
//Do lệnh gán là copy/clone nên khi Math.getAbsolute bị thay đổi, math.factorial không bị ảnh hưởng

//Assign arrow function to class static property
Math.sayHello = (message) => {
  log(message);
};


Math.sayHello('Chao cac ban');

//Assign arrow function to object property
math.sayHi = (message) => {
  log(message);
};

math.sayHi('Hi friend');

//Hàm trả về hàm
math.funfunction = (operator) => {

  switch (operator) {
    case '+':
      return (a, b) => {  //trả về arrow function
        return a + b;
      };
    case '-':
      return (a, b) => {  //trả về arrow function
        return a - b;
      };
      //đã return trước đó rồi nên không cần break nữa
  }
};

let add = math.funfunction('+');

log(add(10, 20));

let minus =  math.funfunction('-');

log(minus(10, 20));
