//deepcopy and sahallowcopy//
//deepcopy call by value//
let x = 'hello';
const y = x;

x = 'hello world';
console.log(x);
console.log(y);


//shallowcopy call by reference//
let arr = [2,3];
const arr2 = [...arr];  //using spread operator it becomes an deep copy even in object//

arr.push(4);
arr.pop();
console.log(arr);
console.log(arr2);
