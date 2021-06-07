//1. even  and odd numbers
function oddEvenNum(x){
    if (x % 2 == 0) {
        return true;
    }
    return false;
}

//2. area of rectangle
function areaOfRectangle(a, b){
    if (a > 0 && b > 0) {
        return Math.abs(a * b);
    }
    return 'a and b must be more than 0'
}

//3. area of square
function areaOfSquare(c){
    if (c > 0) {
        return Math.abs(c * c);
    }
    return 'c must be more than 0'
}

//4. returns random numbers between 0 and 100
function getRandomNumber(){
    return Math.floor(Math.random() * 101);
}

//5. random (real) numbers between two numbers
function randomBetween(a, b) {
  return Math.floor(Math.random() * (b - a) + a);   //can show min number too. 
}

//6.  returns random names
function names(gender) {
    let girlsNames = [
        'Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn'
    ];
    let boysNames = [
        'Liam', 'Noah', 'Oliver',  'William', 'Elijah', 'James', 'Benjamin', 'Lucas', 'Mason', 'Ethan'
    ];
    if (gender == 'boy') {
        return boysNames[Math.floor(Math.random() * boysNames.length)];
    };
    if (gender == 'girl') {
        return girlsNames[Math.floor(Math.random() * girlsNames.length)];
    };
    return "choose between 'girl' and 'boy'"
}

//7. leap year
function leapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}


//8. returnes volume of rectangular parallelepiped
function volume(a, b, c){
    if (a > 0  && b > 0 && c > 0) {
        return Math.abs(a * b * c);        
    }
    return 'a, b and c must be more than 0'
}

//9. odd numbers between a and b
function oddNumbers(a, b) {
    for (let x = a; x <= b; x++) {
        if (x % 2 == 1) {
            console.log(x);
        }
    }
}

//10.  returns x power y
// function power(x, y) {
//     return x**y;
// }
function exponent(x, y) {
    if (y === 0) {
        return 1;
    } else {
        return x * exponent(x, y-1);
    }
};