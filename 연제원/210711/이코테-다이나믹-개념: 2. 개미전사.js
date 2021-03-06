// 문제

// 개미전사는 부족한 식량을 충당하고자 메뚜기 마을의 식량창고를 몰래 공격하려고 한다.
// 메뚜기 마을에는 여러 개의 식량창고가 있는데 식량창고는 일직선으로 이어져 있다.
// 각 식량창고에는 정해진 수의 식량을 저장하고 있으며 개미전사는 식량창고를 선택적으로 약탈해 식량을 빼앗을 예정이다.

// 이때, 메뚜기 정찰병들은 일직선상에 존재하는 식량창고 중에서 서로 인접한 식량창고가 공격받으면 바로 알아챌 수 있다.
// 따라서 개미 전사가 정찰병에게 들키지 않고 식량창고를 약탈하기 위해선 최소 한 칸 이상 떨어진 식량창고를 약탈해야한다.

// ex) [1,3,1,5]
// => 3, 5를 털때 가장 많이 얻는다.

// 풀이
// 0번째 부터 최대 털 수 있는 식량을 비교
// => 직전값 vs 현재 값 + 전전 값
function solution(food) {
  const d = Array(food.length).fill(0);
  d[0] = food[0];
  d[1] = Math.max(food[0], food[1]);
  for (let i = 2; i < d.length; i++) {
    d[i] = Math.max(d[i - 1], food[i] + d[i - 2]);
  }

  console.log(d);
  return Math.max(...d);
}

console.log(solution([1, 3, 1, 5]));
