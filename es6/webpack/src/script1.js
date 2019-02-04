var script1Var = 'This is script 1 variiable value.';

let jsonData = JSON.parse(data)
//alert(jsonData[0].name);


//var script2Var = 'This is script 2 variable value.';

//alert(script1Var);



function add_numbers(x, y) 
{
  var local_result = x + y;
  console.log("The local result is: " + local_result);
}
add_numbers(4, 5);
//console.log(local_result);


var myArray = new Array("x", "y", "z");
myArray = myArray.concat("1", "2", "3", "z"); 
console.log(myArray.push('Mani'));
console.log(myArray);

console.log(myArray.pop());
console.log(myArray);

console.log(myArray.unshift('Divya'));
console.log(myArray);

console.log(myArray.slice(1, 3));

console.log(myArray.splice(1, 3));