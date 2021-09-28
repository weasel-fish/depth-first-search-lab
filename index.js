function depthFirstSearch(root, vertices, edges) {
    let visited = [root]
    let stack = [root]

    while (stack.length > 0) {
        let workingNode = stack.pop()
        if(!workingNode.discovered) {
            workingNode.discovered = true
            let adjacentNodes = findAdjacent(workingNode, vertices, edges)
            for(const adj of adjacentNodes) {
                visited.push(adj)
                stack.push(adj)
            }
        }
    }

    return visited
}

function findAdjacent(node, vertices, edges) {
    let adjacentNodes = []
    for(const edge of edges) {
        if(edge[0] == node.name) {
            let newNode = vertices.find(node => node.name == edge[1])
            if(!newNode.discovered) {
                adjacentNodes.push(newNode)
            }
        } else if (edge[1] == node.name) {
            let newNode = vertices.find(node => node.name == edge[0])
            if(!newNode.discovered) {
                adjacentNodes.push(newNode)
            }
        }
    }
    return adjacentNodes
}