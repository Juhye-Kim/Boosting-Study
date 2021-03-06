function solution(routes) {
  let answer = 0;

  // 나간 기준으로 정렬
  routes.sort((a, b) => a[1] - b[1]);

  // 가장 먼저 나간 차량부터 카메라가 찍히도록 한다.
  let camera = routes[0][0] - 1;

  for (let i = 0; i < routes.length; i++) {
    // 카메라가 찍혔는지 체크
    if (camera < routes[i][0]) {
      answer += 1;
      // 찍혔으면 나간 시점에 다시 설치
      camera = routes[i][1];
    }
  }

  return answer;
}

/*
[-18, -13]  ----
[-14, -5]      --------
[-5, -3]               --
[-20, 15]  -----------------------

가장 먼저 나간 기준([i][1])으로 정렬을 한다.
가장 먼저 나간 차량부터 카메라가 찍히도록 설치한다 => 카메라 = 배열[0][0] - 1
카메라가 찍히면 answer++ 해주고 차량이 나가는 순간 카메라를 다시 설치한다.
*/
