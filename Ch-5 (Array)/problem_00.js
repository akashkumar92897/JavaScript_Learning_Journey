//Creating Array
let numbers = [1, 2, 3, 4, 5];

//Accessing Values
console.log(numbers[0]);  //1
console.log(numbers[1]);  //2
console.log(numbers[2]);  //3
console.log(numbers[3]);  //4
console.log(numbers[4]);  //5

//Length of array
console.log(numbers.length); //5

//Changing the value at an idx
console.log(numbers[2] = 99);  //99

//typeOf array
console.log(typeof(numbers)); //Object

//Array Methods
console.log(numbers.toString());  //1, 2, 99, 4, 5
console.log(numbers.join());  //1-2-99-4-5
console.log(numbers.pop());  //removes last idx element & return it.
console.log(numbers.push(0));  //0 is added at last idx & returns length of new array
console.log(numbers.shift()); //Removes first element & return it.
console.log(numbers.unshift(99)); //Add element to the begining & return the length of new array.
console.log(delete numbers[11]); //delete removes an array element without reindexing; it leaves a hole and returns true.

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);  //99 2 99 4 0
}

let n1 = [1, 2, 3];
let n2 = [4, 5];
let n3 = [7, 8, 9];
console.log(n1.concat(n2, n3)) //Returns a new array, doesn't change the existing array.

let n4 = [4,2,5,7,1,9];
console.log(n4.sort()); //1, 2, 4, 5, 7, 9

let n5 = [1, 2, 3, 4, 5];

