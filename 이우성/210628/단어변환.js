function solution(begin, target, words) { 
  const bfs = () => {
      let q = [{ cur: begin, dist: 0}];
      let visited = new Array(words.length).fill(false);
      
      while (q.length !== 0) {
          let { cur, dist } = q.shift();
          
          if (cur === target) {
              return dist;
          }
          
          for (let i = 0; i < words.length; i++) {
              if (visited[i] === false && wordChecker(cur, words[i]) === 1) {
                  visited[i] = true;
                  q.push({ cur: words[i], dist: dist + 1 });
              }
          }
      }
      
      return 0;        
  }
  
  let answer = bfs();
  return answer;
}

// 단어 다른지 체크
function wordChecker (cur, word) {
  let count = 0;
  
  for (let i = 0; i < cur.length; i++) {
      if (cur[i] !== word[i]) {
          count += 1;
      }
      if (count > 1) {
          break;
      }
  }
  return count;
}

/*
bfs로 접근한다.

1. dist(워드를 하나 거쳐서 변환할 때마다 체크해주는 변수) 추가.
2. bfs에서 q에 넣고 뺄 때 dist를 활용
3. 방문을 안했으면서, 단어 체크가 되면 dist추가를 해주고 다음 단계로 넘어간다.

단어가 하나라도 다른지 체크해주는 함수 필요

*/