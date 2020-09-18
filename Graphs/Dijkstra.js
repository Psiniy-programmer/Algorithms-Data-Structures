// Dijkstra Alghoritm
// Description : https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/dijkstra

const graph = {};
graph["start"] = {};
graph["start"]["a"] = 9;
graph["start"]["b"] = 2;
graph["a"] = {};
graph["a"]["final"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["final"] = 5;
graph["final"] = {};

const costs = {};
costs["a"] = 9;
costs["b"] = 2;
costs["final"] = Infinity;

const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["in"] = "none";

const findLowestCostNode = (costs, processed) => {
    let min = Infinity;
    let nodeKey;
    for (let key in costs) {
        if (min > costs[key] && !processed.includes(key)) {
            min = costs[key];
            nodeKey = key;
        }
    }
    if (!processed.includes(nodeKey)) {
        processed.push(nodeKey);
        return nodeKey;
    } else return false
}

const dijkstra = (graph, costs, parents) => {
    let cost, neighbours, newCost;
    let processed = [];
    let node = findLowestCostNode(costs, processed);
    while(node) {
        cost = costs[node];
        neighbours = graph[node];
        for(let key in neighbours) {
            newCost = cost + neighbours[key];
            if (costs[key] > newCost) {
                costs[key] = newCost;
                parents[key] = node;
            }
        }
        node = findLowestCostNode(costs, processed);
    }
    return costs;
}

console.log(dijkstra(graph, costs, parents))