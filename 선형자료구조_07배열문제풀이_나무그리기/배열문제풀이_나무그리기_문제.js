/* 나무 그리기 */

/* user code */
function answer(height) {
  let str = "";

  // 1. 공백 처리 " "
  // 2. * 처리 "*" 2n + 1
  // 3. 개행문자 추가 

  for(let i = 0; i < height; i++) {
      // 1. 공백 처리 " "
      
  }

  return str;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
