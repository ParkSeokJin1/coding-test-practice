/* 두 수 최대합 */

/* user code */
function answer(nums) {
  let result = [];

  //sort 함수를 사용해 높은순서 부터 낮은순서로 
 
    let sort = nums.sort((a, b) => b - a);
    result.push(sort[0],sort[1]);
  return  result;
}
/* main code */
let input = [
  // TC: 1
  [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],

  // TC: 2
  [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],

  // TC: 3
  [
    -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
    14,
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
