function solution(A, B) {
  let stack = [];
  let alive = 0;

  for (let i = 0; i < A.length; i++) {
    // 반대 방향 물고기가 있으면 스택에 넣는다.
    if (B[i] === 1) {
      stack.push(A[i]);
    } else {
      // 반대 방향물고기가 없고 0 방향이면 생존
      if (stack.length === 0) {
        alive += 1;
      } else {
        // 물고기들 싸움 시작
        while (stack.length !== 0) {
          let fight = stack.pop();
          if (A[i] < fight) {
            stack.push(fight);
            break;
          }
        }

        if (stack.length === 0) alive += 1;
      }
    }
  }

  //만약 1로만 가는 방향이 있을 수도 있기 때문에 stack 길이를 더한다.
  return alive + stack.length;
}

/**
 * 문제 파악
 * 0. 시간 복잡도: O(n)
 * 1. 각 물고기는 초기에 유니크한 포지션을 가지고 있다. P < Q
 * 2. 배열 A는 물고기의 사이즈를 나타내며 유니크하다.
 * 3. 배열 B는 0 또는 1만 가지고 있으며, 0 => 왼쪽으로  1 => 오른쪽으로
 * 4. 서로 다른 물고기가 반대 방향으로 가고 그 사이에 아무것도 없으면, 만난다.
 * 5. 만났을 때는, 오직 한 마리의 물고기만 살아남는다. (더 사이즈가 큰 물고기가)
 * 6. A[P] > A[Q] 이면 하류 , 반대면 상류
 * 7. 결국 살아남은 물고기의 수를 반환한다.
 *
 * 수도 코드
 * 1. 0이 나오면 카운트 + 1, 방향 1이 나오면 스택에 넣는다.
 * 2. 스택이 없으면 다음 단계로 넘어가고, 있으면 꺼내서 비교
 * 3. 꺼내서 비교할 때,
 *  3.1 스택에서 값을 꺼낸 후 꺼낸 값이 더 클 경우 멈추고 값을 다시 넣고 끝낸다.
 */
