//rock-paper-permutation

// Input	Output
// roundCount:
// 1	[ "r", "p", "s" ]
// roundCount:
// 2	[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
// roundCount:
// 0	[ ]


function rockPaperPermutation (roundCount) {

	var possible = ["r", "p", "s"];
  var result = [];


  if(roundCount <= 0) { //base case, also accounts for neg numbers
  	return result;
  }

 	if(roundCount > 0){
	  for(var i = 0; i < possible.length; i++) {
	  		result.push(possible[i]);
	  		roundCount--;
	  }
	}

  return result
}

console.log(rockPaperPermutation(result));



/*****
O: An array consisting of the permutations of a specified length (order DOES matter)
I: integer n >= 0 indicates the length of the "permutations" we need to find
C: No constraints
E: (examples, sometimes you can have more than one base case)
For n === 0: []
For n === 1: ["r", "p", "s"]
For n === 2: ["rr", "rp", "pr", "pp", "ps", "sr", "sp", "ss"] // the pattern starts at this point
For n === 3: ["rr" + "r", "rr + "p", "rr" + "s", "rp" + "r", "rp" + "p", "rp" + "s" ... "pp + "p",..."pr" + "r"]

General Plan:
Questions:
1. what are the base cases?
2. For recursive (non-base) cases, how can we describe the case in question in terms of simpler ones?
3. What do we mean by "simpler"?

1. Base cases: n === 0 (return []), maybe n === 1 ?
2. For n === 3; Take every permutation for n === 2 and make three new permutations (with the letters 'r', 'p', 's' at the end)
3. "Simpler" === smaller value of n

PSEUDOCODE

If n === 0, return []
If n === 1, return ["r", "p", "s"]
Otherwise...
create a new array (nextPermutations) which will hold the "n" permutations
Calculate ach of the "n-1" permutations
For each of the "n-1" permutations, add three new permutations (with "r", "p" and "s", respectively) to the "new array"
Return the new array

***/

var rockPaperPermutations = function(n){
  if(n === 0) {
    return [];
  }

  if(n === 1){
    return ['r', 'p', 's'];
  }

  var nextPermutations = [];

  var prevPermutations = rockPaperPermutations(n-1);

  prevPermutations.forEach(function(permutation){
    nextPermutations.push([permutation + 'r'])
    nextPermutations.push([permutation + 's'])
    nextPermutations.push([permutation + 'p'])
  })
  return nextPermutations
}

//other possible solution
var rockPaperPermutation=r=(p,s='')=>p--?r(p,s+'r').concat(r(p,s+'p'),r(p,s+'s')):s?[s]:[]
