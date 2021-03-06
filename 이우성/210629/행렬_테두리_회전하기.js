function solution(rows, columns, queries) {
  let answer = [];
  let map = [];

  // 표를 그린다.
  for (let i = 0; i < rows; i++) {
    let temp = [];
    for (let j = 1; j < columns + 1; j++) {
      temp.push(i * columns + j);
    }
    map.push(temp);
  }

  console.log(map);
  queries.forEach((query) => {
    let [x1, y1, x2, y2] = query;
    let move = [];

    for (let i = y1; i < y2; i++) {
      move.push(map[x1 - 1][i - 1]);
    }

    for (let i = x1; i < x2; i++) {
      move.push(map[i - 1][y2 - 1]);
    }

    for (let i = y2; i > y1; i--) {
      move.push(map[x2 - 1][i - 1]);
    }

    for (let i = x2; i > x1; i--) {
      move.push(map[i - 1][y1 - 1]);
    }
    answer.push(Math.min(...move));

    const temp = move.pop();
    move.unshift(temp);

    for (let i = y1; i < y2; i++) {
      map[x1 - 1][i - 1] = move.shift();
    }

    for (let i = x1; i < x2; i++) {
      map[i - 1][y2 - 1] = move.shift();
    }

    for (let i = y2; i > y1; i--) {
      map[x2 - 1][i - 1] = move.shift();
    }

    for (let i = x2; i > x1; i--) {
      map[i - 1][y1 - 1] = move.shift();
    }
  });

  return answer;
}

/*
구현 문제 - 한 칸 회전 후, 회전된 칸에서 제일 작은 수를 반환

1. 먼저 행, 열에 맞게 행렬 표를 그린다.
2. 회전해야 하는 범위를 구한다.
3. 회전하고 표를 바꿔 준다.

*/
