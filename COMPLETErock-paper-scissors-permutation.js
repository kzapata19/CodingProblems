//rock-paper-permutation

// Input	Output
// roundCount:
// 1	[ "r", "p", "s" ]
// roundCount:
// 2	[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
// roundCount:
// 0	[ ]


/*****
O: An array consisting of the permutations of a specified length (order DOES matter)
I: integer n >= 0 indicates the length of the "permutations" we need to find
C: No constraints
E: (examples, sometimes you can have more than one base case)
For n === 0: []
For n === 1: ["r", "p", "s"]
For n === 2: [ 'rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss' ] // the pattern starts at this point
For n === 3: ["rr" + "r", "rr" + "p", "rr" + "s", "rp" + "r", "rp" + "p", "rp" + "s" ... "pp + "p",..."pr" + "r"]

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
Calculate each of the "n-1" permutations
For each of the "n-1" permutations, add three new permutations (with "r", "p" and "s", respectively) to the "new array"
Return the new array

***/

var rockPaperScissorsPermutations = function(rounds){
  if(rounds <= 0) return [];

  else if(rounds === 1) return ['r', 'p', 's'];

  else {
    var prevPermutations = rockPaperScissorsPermutations(rounds - 1);
    var results = [];

    for(var i = 0; i < prevPermutations.length; i++){
      results.push(prevPermutations[i] + 'r');
      results.push(prevPermutations[i] + 'p');
      results.push(prevPermutations[i] + 's');
    }

    return results;
  }
}

console.log(rockPaperScissorsPermutations(0)) // should yield []
console.log(rockPaperScissorsPermutations(1)) // should yield ['r', 'p', 's']
console.log(rockPaperScissorsPermutations(2)) // should yield ["rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss"]
console.log(rockPaperScissorsPermutations(3).length) // should yield ["rrr", "rrs", "rrp", "rpr", "rpp", "rps", "rsr", "rsp", "rss"...same for all "p" and "s" patterns; total 27 strings]
//other possible solution
//var rockPaperScissorsPermutation=r=(p,s='')=>p--?r(p,s+'r').concat(r(p,s+'p'),r(p,s+'s')):s?[s]:[]
