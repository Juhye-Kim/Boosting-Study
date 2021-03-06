function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];

  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    // cache hit
    let city = cities[i].toLowerCase();
    if (cache.includes(city)) {
      answer += 1;
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
    } else {
      // cache miss
      if (cache.length < cacheSize) {
        cache.push(city);
      } else {
        cache.shift();
        cache.push(city);
      }
      answer += 5;
    }
  }

  return answer;
}

/*
LRU - 가장 최근에 사용된 항목은 리스트의 맨 앞에 위치하고 가장 최근에 사용되지않은 항목 순서대로 리스트에서 제거된다.
    즉, 캐시 사이즈가 3일 때 [1, 2, 3, 4] 순으로 들어오면 1은 제거한다. 
cache hit - 캐시에서 값을 가져온다.
cache miss - 캐시에 해당 값이 없어서 메모리에서 값을 가져온다.

1. 캐시크기가 0이면 계속 miss이므로 도시 길이 * 5를 해준다.
2. hit와 miss를 나누어서 생각한다. (+ 대소문자 구문X)
3. hit일 경우
  3.1 캐시에 해당 도시가 있을 경우 answer+=1을 해준다.
  3.2 LRU 알고리즘 => 해당 도시를 제거하고(splice), 가장 최근 도시를 넣어준다.(push) 
4. miss일 경우
  4.1 캐시 사이즈가 있으면 캐시에 넣어준다.
  4.2 캐시가 꽉찼으면 제일 오래된 도시를 제거하고(shift) 가장 최근에 사용되는 도시를 넣어준다.(push)
  4.3 miss일 경우는 answer+=5를 해준다.
*/
