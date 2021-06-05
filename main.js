//1. even  and odd numbers
function oddEvenNum(x){
    if (x % 2 == 0) {
        return true;
    }
    return false;
}

//2. area of rectangle
function areaOfRectangle(a, b){
    return Math.abs(a * b);
}

//3. area of square
function areoOfSquare(c){
    return Math.abs(c*c);
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
function names() {
    let girlsNames = [Olivia, Emma, Ava, Sophia, Isabella, Charlotte, Amelia, Mia, Harper, Evelyn]
    let boysNames = [Liam, Noah, Oliver,  William, Elijah, James, Benjamin, Lucas, Mason, Ethan]

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
    return Math.abs(a * b * c);
}

//9. 