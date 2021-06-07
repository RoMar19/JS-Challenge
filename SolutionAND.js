/**
 * Function to return all distinct AND-Siblings that can be formed 
 * by the positive integers in descending order, only numbers (integers) 
 * and no blank spaces acepted as input.
 * */

 function solution(input) {
  //Removes all non integer characters including blank spaces
  stringtoNum = input.replace(/[^\d]/g, '');
  
  //Checks if an integer was provided
  if(parseInt(stringtoNum)) {
  //If integer is provided then run this code....
  //Declaring array for possible AND-Sibilins
  var Array = [];

  //Possible AND-Sibilins loop that pushes to Array
  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
      for (var z = 0; z < 3; z++) {
        if (x != y && y != z && z != x) {
          Array.push(stringtoNum[x] + "" + stringtoNum[y] + "" + stringtoNum[z]);
        }
      }
    }
  }

  //Sort array in descending order
  Array.sort(function (a, b) {
    return b - a;
  });

  //Convert array to String
  var output = Array.toString();

  //Return output
  return output;
  }
  //If an integer wasn't provided then return an error
  else {
    return "Exception Error: No integers provided. Please try again."
   }
}

//Some example inputs
console.log(solution('3264')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
console.log(solution('ABC')); // exception error message