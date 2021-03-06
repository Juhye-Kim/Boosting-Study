function solution(skill, skill_trees) {
  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let isLearn = true;
    let idx = 0;

    for (let j = 0; j < skill_trees[i].length; j++) {
      // 먼저 배울 수 있는 스킬인지 확인
      if (skill.includes(skill_trees[i][j])) {
        if (skill[idx] === skill_trees[i][j]) {
          idx += 1;
        } else {
          isLearn = false;
          break;
        }
      }
    }
    if (isLearn) answer += 1;
  }

  return answer;
}

/*
1. 주어진 skill 순서에 맞게 스킬트리가 구성되어야 함.
2. 스킬트리에 있는 트리 한 문자씩 스킬과 순서를 비교한다.
  2.1 스킬트리의 문자가 스킬안에 있는지 확인한다 => 배울 수 있는 스킬인지 먼저 확인
  2.2 배울 수 있는 스킬이면 스킬에서 다음으로 배울 수 있는 스킬로 이동
  2.3 배울 수 없는 스킬이면 멈춘다.
3. 토글 변수를 만들어서 true인 값만 answer++을 해준다.    
*/
