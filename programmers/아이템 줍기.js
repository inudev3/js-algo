function solution(rectangle, characterX, characterY, itemX, itemY) {
  for (const [x1, y1, x2, y2] of rectangle) {
    fill(x1 * 2, y1 * 2, x2 * 2, y2 * 2);
  }
  const queue = [];
  queue.push([characterX * 2, characterY * 2, 0]);
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const dPos = dx.map((e, i) => [e, dy[i]]);
  const check = Array(101)
    .fill()
    .map((_) => Array(101).fill(false));

  let ans = 9999;
  while (queue.length) {
    const [x, y, step] = queue.shift();
    if (x == itemX * 2 && y == itemY * 2) ans = Math.min(ans, step);
    for (const [dx, dy] of dPos) {
      const nx = x + dx,
        ny = y + dy;
      if (nx < 0 || nx > 100 || ny < 0 || ny > 100) continue;
      if (check[nx][ny] || map[nx][ny] != 1) continue;
      check[nx][ny] = true;
      queue.push([nx, ny, step + 1]);
    }
  }
  return ans / 2;
}
const map = Array(101)
  .fill()
  .map(() => Array(101).fill(0));
function fill(x1, y1, x2, y2) {
  for (let i = x1; i <= x2; i++)
    for (let j = y1; j <= y2; j++) {
      if (map[i][j] === 2) continue;
      map[i][j] = 2;
      if (i == x1 || i == x2 || j == y1 || j == y2) map[i][j] = 1;
    }
}
