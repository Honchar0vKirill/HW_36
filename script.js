//Найбільше елемент
let array = [0, 3, 1, 87, 10];
let max = Math.max(...array);
console.log(max); 

//Середнє значення
let arr = [5, 2, 9, 1, 7, 0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
sum += arr[i];
}

let avg = sum / arr.length;

console.log(avg); 