function solution(X, A) {
  let count = 0;
  let checkLeaf = Array.from({ length: X }).map((v) => false);

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X && checkLeaf[A[i] - 1] === false) {
      checkLeaf[A[i] - 1] = true;
      count += 1;
    }

    if (count === X) return i;
  }

  return -1;
}

/**
 * 문제 파악
 * 1. 개구리가 다른 강으로 넘어가려고 한다.
 * 2. 초기 위치는 0이고 반대편은 X + 1이다. 강 수면으로 나뭇잎들이 떨어진다?
 * 3. A 배열의 정수는 떨어진 나뭇잎들이다. K는 떨어진 시간, A[k]는 떨어진 위치를 나타낸다.
 * 4. 목표는 가장 이른 시간에 다른 강까지 점프해서 가는 것이다.
 * 5. 나뭇잎은 강 위에서 위치를 바꿀 수 없다?????
 * 6. 예시 코드에서는 X가 5이므로 요소가 1, 2, 3, 4, 5가 나와야 되고 5의 인덱스를 구하면 된다.
 * 7. 만약 X보다 큰 수가 나오면 -1을 리턴한다.
 *
 * 수도코드
 * 0. 시간 복잡도: 여유
 * 1. 배열을 순회하면서 요소에서 X값이 나오면 해당 인덱스가 정답
 * 2. 1부터 X까지의 숫자를 순서대로 체킹하는 것이 관건이다.
 * 3. 만약 X에 도달했을 때까지 값을 찾지 못하면 -1을 반환
 */
