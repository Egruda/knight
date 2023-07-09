class Movelist {
    constructor(array) {
        this.position = [array[0], array[1]];
        this[0] = null;
        this[1] = null;
        this[2] = null;
        this[3] = null;
        this[4] = null;
        this[5] = null;
        this[6] = null; 
        this[7] = null;
        this.previous = null;
    }
}

class Board {
    constructor() {
        this.tree = this.createNode();
    }

    // Create node for every square
    createNode(array = []) {
        
        for (let i = 0; i < 8; i++) {
            let row = [];
            for (let j = 0; j < 8; j++) {
                let node = new Movelist([i,j]);
                row.push(node);
            }
            array.push(row);
        }
        return this.createTree(array);
    }


    // Define each node's children (allowable movement)
    createTree(array) {
        for(let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                array[i][j][0] = (i + 1 >= 0 && i + 1 < 8) && (j + 2 >= 0 && j + 2 < 8) ? array[i + 1][j + 2] : null;
                array[i][j][1] = (i + 2 >= 0 && i + 2 < 8) && (j + 1 >= 0 && j + 1 < 8) ? array[i + 2][j + 1] : null;
                array[i][j][2] = (i + 2 >= 0 && i + 2 < 8) && (j - 1 >= 0 && j - 1 < 8) ? array[i + 2][j - 1] : null;
                array[i][j][3] = (i + 1 >= 0 && i + 1 < 8) && (j - 2 >= 0 && j - 2 < 8) ? array[i + 1][j - 2] : null;
                array[i][j][4] = (i - 1 >= 0 && i - 1 < 8) && (j - 2 >= 0 && j - 2 < 8) ? array[i - 1][j - 2] : null;
                array[i][j][5] = (i - 2 >= 0 && i - 2 < 8) && (j - 1 >= 0 && j - 1 < 8) ? array[i - 2][j - 1] : null;
                array[i][j][6] = (i - 2 >= 0 && i - 2 < 8) && (j + 1 >= 0 && j + 1 < 8) ? array[i - 2][j + 1] : null; 
                array[i][j][7] = (i - 1 >= 0 && i - 1 < 8) && (j + 2 >= 0 && j + 2 < 8) ? array[i - 1][j + 2] : null;
            }
        
        }
        return array;
    }

    search(initial, target, array = this.createNode(), queue = [], visited = [], counter = 0) {
        queue.push(array[initial[0]][initial[1]]);
        
        // if target has been found, stop loop
        
        while (!visited.find(location => location.position[0] === target[0] && location.position[1] === target[1])) {    
          
                let node = queue.shift();
                if (visited.find(location => location.position[0] === node.position[0] && location.position[1] === node.position[1])) {
                    continue;
                } else {
                visited.push(node);
                
                if (node[0] !== null) {
                    if(!node[0].previous) {
                        node[0].previous = node;
                    } 
                    queue.push(node[0]);
                } 
                
                if (node[1] !== null) {
                    if(!node[1].previous) {
                        node[1].previous = node;
                    }
                    queue.push(node[1]);
                } 
                
                if (node[2] !== null) {
                    if(!node[2].previous) {
                    node[2].previous = node;
                    }
                    queue.push(node[2]);
                } 
                
                if (node[3] !== null) {
                    if(!node[3].previous) {
                        node[3].previous = node;
                    }
                    queue.push(node[3]);
                } 
                
                if (node[4] !== null) {
                    if(!node[4].previous) {
                        node[4].previous = node;
                    } 
                    queue.push(node[4]);
                } 
                
                if (node[5] !== null) {
                    if(!node[5].previous) {
                        node[5].previous = node;
                    }
                    queue.push(node[5]);
                } 
                
                if (node[6] !== null) {
                    if(!node[6].previous) {
                        node[6].previous = node;
                    }
                    queue.push(node[6]);
                } 
                
                if (node[7] !== null) {
                    if(!node[7].previous) {
                        node[7].previous = node;
                    }
                    queue.push(node[7]);
                }  
            }
        }
        
        const visitedLength = visited.length - 1;
        const node = visited[visitedLength];
        const solution = this.printPath(node, [], initial);
        const solutionLength = solution.length;
        console.log(`You made it in ${solutionLength - 1} moves! Here's your path:`);
        for (let i = solutionLength - 1; i >= 0; i--) {
             console.log(solution[i]);
         } 

    }

    printPath(node, solution, initial) {
        while(!equalsCheck(node.position, initial)) {
            solution.push(node.position);
            node = node.previous;
        }

        if(!solution.find(location => location[0] === initial[0] && location[1] === initial[1])) {
            solution.push(node.position);

        return solution;
    }
    }
}

let game = new Board();

function equalsCheck(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}