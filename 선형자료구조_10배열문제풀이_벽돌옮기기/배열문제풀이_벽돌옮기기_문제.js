/* 벽돌 옮기기 */

/* user code */
function answer(blocks) {
  let result = 0;
  let count = 0;
  // 평균값 구하기  다 더한 다음 길이만큼 나누기
  for(let i = 0; i < blocks.length; i++) {
     count += blocks[i];
  }
  // 평균값 
  count = count / blocks.length;
  
 // 평균값 보다 더 클때 빼서 더해주기
  for(let i = 0; i < blocks.length; i++) {
    if(blocks[i] > count) {
      result += blocks[i] - count;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 4, 1, 7, 5],

  // TC: 2
  [12, 8, 10, 11, 9, 5, 8],

  // TC: 3
  [27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
