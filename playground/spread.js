// function add (a,b) {
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));
//
// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greeter(name, age) {
  return ('Hi '+ name + ', you are '+ age);
}

console.log(greeter(...person));
console.log(greeter(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function(_){
  console.log('Hi ' + _)
});
