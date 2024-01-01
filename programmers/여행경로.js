function solution(tickets) {
  let graph = {};
  const n = tickets.length + 1;
  // Construct the graph
  tickets.forEach(([src, dest]) => {
    if (!graph[src]) {
      graph[src] = [];
    }
    if (!graph[dest]) graph[dest] = [];
    graph[src].push(dest);
  });

  // Sort the destinations to ensure lexicographical order
  for (let src in graph) {
    graph[src].sort();
  }

  // Recursive DFS function
  function dfs(node, path) {
    path.push(node);
    if (path.length === n) return path;
    for (let i = 0; i < graph[node].length; i++) {
      const next = graph[node][i];
      graph[node].splice(i, 1);
      const nextPath = dfs(next, path);
      if (nextPath) return nextPath;
      graph[node].splice(i, 0, next);
    }
    path.pop();
    return null;
  }

  // Start DFS from 'ICN'
  return dfs("ICN", []);
}
