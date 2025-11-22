function reversestring(str) {
    return str.split("").reverse().join("");
}
console.log(reversestring("hello"));


//type2:

function reversedString(str1) {
    var newstring = " ";
    for (var i = str1.length - 1; i >= 0; i--) {
        newstring = newstring + str1[i];

    }
    return newstring;

}
console.log(reversedString('geeks'));

//type3:
function recursiveStr(str2) {
    if (str2 === "")
        return "";
    else
        return recursiveStr(str2.substr(1) + str2.charAt(0));
}
console.log(reversedString("monkey"));

//type4

function testplaystring(s4) {
    if (s4 === "")
        return "";
    else
        return testplaystring(s4.substr(1)) + s4.charAt(0);

}

console.log(testplaystring("dad"));

console.log(testplaystring("daddy"));


//palindrome -- reverse main string and compare with original string if matches it gives true or false.

function palindromeCheck(strr) {
    const reversed = strr.split("").reverse().join("");
    return strr === reversed
}
console.log(palindromeCheck('GFG'));


function Palidroexample(paex) {
    const revpali = paex.split("").reverse().join("");
    return paex === revpali;
}
console.log(Palidroexample("MOM"));

// FIND THE LARGEST NUMBER
function largestNumber(arr) {
    return Math.max(...arr);
}
console.log(largestNumber([10, 100, 152, 5, 2, 6, 7,]));

function largestNum(num) {
    return Math.min(...num);
}
console.log(largestNum([1, 0, 5, 4, 0.5, -0, -0.1]));
console.log(largestNum([0, -0, -0.1, -0.0]));

//arrow function
const add = (a, b) => a + b;
console.log(add(10, 2));

const mult = (c, d) => c * d;
console.log(mult(4, 5));

//adding property to an object
const obj1 = {
    name: 'riya',
    class: 10,
    age: 15,
    place: "bangalore"
}
obj1.country = "India"
console.log(obj1);

//slice method -- return new array without disturbing the original one
let arry = [5, 6, 7, 5, 8, 4, 9, 4, 2, 1, 0];
console.log(arry.length);
const newarr = arry.slice(1);
const newarr1 = arry.slice(0, 4);
const newarr2 = arry.slice(1, -1);
console.log(newarr2);
console.log(newarr1);
console.log(newarr);

//array 

//empty array
var a =[];
console.log(a);

//array  - literal type
var b = [1,2,3,4,5,6,7];
var fst  = b[0];
var last = b[6];
console.log(fst); //accessing first element
console.log(last); //accessing last element
console.log(b);
console.log(b[4]);


//constructor type array
var obtj = new Array(10,66,54,88,7);
var lengthoflst =  obtj[obtj.length-1];
console.log(obtj);
console.log(obtj[4]);


//object type
var obj ={
    name:"harish",
    place:"hindupur",
    age:24,
    city:"sri satya sai"
};
console.log(obj);
console.log(obj[2]); //age as output
console.log(obj[5]);
console.log(obj.name);
console.log(obj.age); //access the object properties

obj.education ="M.tech"; // modify the obj properties (add)
console.log(obj);

delete obj.age; //delete the obj property
console.log(obj);

let a1 = ["html", "css", "js", "dom" , "pom"];
a1[0] = "bootstap"; //update the value
delete a1[3];
a1[3]="value replaced";
console.log(a1);
console.log(a1.length);

//push, unshift
a1.unshift("katalon"); //adds element at starting
console.log(a1);

a1.push("andriod sdk");
console.log(a1);

//pop, shift

a1.pop();
console.log(a1);

a1.shift();
console.log(a1);

//slice method - new array - can access on positive & negative index values [ 'bootstap', 'css', 'js', 'value replaced', 'pom' ]
a1.slice(2) ; 
console.log(a1);

a1.slice(0,3);
console.log(a1);

a1.slice(1,-1)
console.log(a1);

a1.splice(1,3); //start from index 1 it will delete 3 elements First 
a1.splice(1,0,"raj","kamal","mita"); // adds 3 elements
console.log(a1);







