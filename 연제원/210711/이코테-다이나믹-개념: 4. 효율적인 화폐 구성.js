// N가지 종류의 화폐가 있다.
// 이 화폐들의 개수를 최소한으로 이용해서 그 가치의 합이 M원이 되도록 하려고 한다.
// 각 화폐는 몇 개라도 사용할 수 있으며, 사용한 화폐의 구성은 같지만 순서만 다른 것은 같은 경우로 구분한다.

// 예로, 2,3원만 있을 때 15원을 구성하기 위해 3원을 5개 사용하는 것이 최소다.

// N개의 화폐들이 money배열로 주어질 때
// M원을 만들기 위한 최소한의 화폐개수를 출력해라. 불가능시 -1리턴

// 풀이
// 금액 i를 만들 수 있는 최소 화폐개수를 A.i라고 하면
// 최소 금액 단위 (money중 한 요소) k를 통해 A.i-k  => i-k원을 만들 수 있는 최소 단위

// A.i-k를 만드는 방법이 존재한다면 Ai = Math.min(A.i, A.i-k + 1)
// B.i-k를 만드는 방법이 존재하지 않으면 -1

// 여기선 매 계산마다 갱신하는 것이 아니고 화폐단위 순서대로 계속 비교!
function solution(N, M, money) {
  const arr = Array(M + 1).fill(10001); // 처음에 -1로 초기값을 줬었는데 이러면 제일 처음 화폐단위가 비교할 때 무조건 -1을 최솟값으로 생각해서 안됨!
  arr[0] = 0;

  for (let k of money) {
    for (let i = k; i < arr.length; i++) {
      if (arr[i - k] !== -1) {
        // 현재 단위 - 최소 화폐단위가 이미 존재하고 있다면, 현재 금액도 만들 수 있다는 뜻
        arr[i] = Math.min(arr[i], arr[i - k] + 1); //
      }
    }
  }

  return arr[M] !== 10001 ? arr[M] : -1;
}

console.log(solution(2, 15, [2, 3])); // 5
console.log(solution(3, 4, [3, 5, 7])); // -1
