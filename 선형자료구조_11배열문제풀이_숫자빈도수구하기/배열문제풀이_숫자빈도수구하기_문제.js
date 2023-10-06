/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
  let result = [];
  let score = [];
  let count = [];
 
  for(let i = s; i <= e; i++) {
    result.push(i);
  }
   
  let join = result.join('').split('');
  
  
  for(let i = 0; i < join.length; i++) {
    if(join[i] == 0) {
      score.push(join[i]);
      count[0] = score.length;
    }else if(join[i] == 1) {
      
    }
    
  }
   console.log(count[0]);
  //return count;
}

/* main code */
let input = [
  // TC: 1
  [129, 137],

  // TC: 2
  [1412, 1918],

  // TC: 3
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
