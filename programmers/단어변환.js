let ans = 50;
function solution(begin, target, words) {
  const n = words.length;
  if (!words.includes(target)) return 0;
  let cnt = 0;
  const visited = new Array(n + 1).fill(false);
  words.unshift(begin);
  visited[0] = true;
  backtrack(
    words,
    visited,
    0,
    cnt,
    words.findIndex((w) => w == target),
  );
  return ans;
}
function checkDiff(a, b) {
  let cnt = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) cnt++;
  }
  return cnt == 1;
}
function dfs(words, visited, start, cnt, target) {
  if (ans <= cnt) return;
  if (start == target) {
    ans = Math.min(ans, cnt);
    return;
  }
  for (let i = 0; i < words.length; i++) {
    if (!visited[i] && checkDiff(words[start], words[i])) {
      visited[i] = true;
      dfs(words, visited, i, cnt + 1, target);
      visited[i] = false;
    }
  }
}
