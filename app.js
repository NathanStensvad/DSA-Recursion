//Exercise 1
const countSheep = function(sheep) {
    if(sheep === 0) {
        return 'All sheep jumped over the fence'
    }

    return 'Another sheep jumps over the fence\n' + countSheep(sheep-1)
}

let sheep = 3;
console.log(countSheep(sheep) + '\n')

//Exercise 2
const powerCalculator = function(base, exponent) {
    if(exponent < 0) {
        return "exponent should be >= 0"
    }

    if(exponent === 1) {
        return base
    }

    return base * powerCalculator(base, exponent-1)
}

console.log(powerCalculator(10,3) + '\n')

//Exercise 3

const reverseString = function(word) {
    if(word.length === 0) {
        return ""
    }
    return word.charAt(word.length-1) + reverseString(word.slice(0,-1))
}

console.log(reverseString("Sally") + '\n')

//Exercise 4

const triangularNumber = function(number) {
    if(number === 1) {
        return number
    }

    return number + triangularNumber(number - 1)
}

console.log(triangularNumber(6) + '\n')

//Exercise 5

let splitArray = []

const stringSplitter = function(parameter) {
    var fslash = parameter.search('/')

    //javascript.prototype.search returns a -1 when the character is not found
    if(fslash === -1) {
        return splitArray.push(parameter)
    }
    //push the first part of the string to the array and 
    //recall the function with the second part of the string
    return splitArray.push(parameter.substr(0, fslash)) 
    + stringSplitter(parameter.substr(fslash+1, parameter.length))
}

stringSplitter("02/20/2020")
console.log(splitArray + '\n')

//Exercise 6

const fibonacci = function(num) {
    if(num <= 1) {
        return 1
    }

    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(6) + '\n')

//Exercise 7

const factorial = function(num) {
    if( num === 1) {
        return num
    }
    return num * factorial(num-1)
}

console.log(factorial(6) + '\n')

//Exercise 8
//This one's a mess because I thought undefined would throw errors
const rightMazeSolver = function(maze, direction = "R", posX = 0, posY = 0) {

    if(maze[posY][posX] === "e") {
        return '\n Maze Finished'
    }

    if (direction === "R") {
        //Check if the right of direction is outside the array
        //or is a * 
        if(maze.length - 1 === posY || maze[posY+1][posX] === '*') {
            //Check if the direction is outside the array, if true change directions
            if(maze[0].length - 1 === posX || maze[posY][posX+1] === '*') {
                return rightMazeSolver(maze, "U", posX, posY)
            }

            //Move in the direction if to the right is blocked
            //but the direction is not blocked
            return "R" + rightMazeSolver(maze, "R", posX + 1, posY)
        }
        //If to the right of direction is blank, 
        //turn right and move in that direction
        return "D" + rightMazeSolver(maze, "D", posX, posY + 1)
    }

    if (direction === "L") {
        //Check if the right of direction is outside the array
        //or is a * as seen in the duplicate code below
        if(posY === 0) {
            //Check if the direction is outside the array, if true change directions
            if(posX === 0) {
                return rightMazeSolver(maze, "D", posX, posY)
            }
            //Check if the direction is a *, if true change directions
            if(maze[posY][posX-1] === '*') {
                return rightMazeSolver(maze, "D", posX, posY)
            }

            //Move in the direction if to the right is blocked
            //but the direction is not blocked
            return "L" + rightMazeSolver(maze, "L", posX - 1, posY)
        }
        
        //I know this will throw an error if i put it in an or operator
        if(maze[posY-1][posX] === '*') {
            //Check if the direction is outside the array, if true change directions
            if(posX === 0) {
                return rightMazeSolver(maze, "D", posX, posY)
            }
            //Check if the direction is a *, if true change directions
            if(maze[posY][posX-1] === '*') {
                return rightMazeSolver(maze, "D", posX, posY)
            }

            //Move in the direction if to the right is blocked
            //but the direction is not blocked
            return "L" + rightMazeSolver(maze, "L", posX - 1, posY)
        }

        //If to the right of direction is blank, 
        //turn right and move in that direction
        return "U" + rightMazeSolver(maze, "U", posX, posY - 1)
    }

    if (direction === "U") {
        //Check if the right of direction is outside the array
        //or is a * as seen in the duplicate code below
        if(maze[0].length - 1 === posX) {
            //Check if the direction is outside the array, if true change directions
            if(posY === 0) {
                return rightMazeSolver(maze, "L", posX, posY)
            }
            //Check if the direction is a *, if true change directions
            if(maze[posY-1][posX] === '*') {
                return rightMazeSolver(maze, "L", posX, posY)
            }

            //Move in the direction if to the right is blocked
            //but the direction is not blocked
            return "U" + rightMazeSolver(maze, "U", posX, posY-1)
        }
        
        //I know this will throw an error if i put it in an or operator
        if(maze[posY][posX+1] === '*') {
            //Check if the direction is outside the array, if true change directions
            if(posY === 0) {
                return rightMazeSolver(maze, "L", posX, posY)
            }
            //Check if the direction is a *, if true change directions
            if(maze[posY-1][posX] === '*') {
                return rightMazeSolver(maze, "L", posX, posY)
            }

            //Move in the direction if to the right is blocked
            //but the direction is not blocked
            return "U" + rightMazeSolver(maze, "U", posX, posY-1)
        }

        //If to the right of direction is blank, 
        //turn right and move in that direction
        return "R" + rightMazeSolver(maze, "R", posX+1, posY)
    }

    if (direction === "D") {
        //Check if the right of direction is outside the array
        //or is a * as seen in the duplicate code below
        if(posX === 0) {
            //Check if the direction is outside the array, if true change directions
            if(maze.length - 1 === posY) {
                return rightMazeSolver(maze, "R", posX, posY)
            }
            //Check if the direction is a *, if true change directions
            if(maze[posY+1][posX] === '*') {
                return rightMazeSolver(maze, "R", posX, posY)
            }

            //Move in the direction if to the right is blocked
            //but the direction is not blocked
            return "D" + rightMazeSolver(maze, "D", posX, posY+1)
        }
        
        //I know this will throw an error if i put it in an or operator
        if(maze[posY][posX-1] === '*') {
            //Check if the direction is outside the array, if true change directions
            if(maze.length - 1 === posY) {
                return rightMazeSolver(maze, "R", posX, posY)
            }
            //Check if the direction is a *, if true change directions
            if(maze[posY+1][posX] === '*') {
                return rightMazeSolver(maze, "R", posX, posY)
            }

            //Move in the direction if to the right is blocked
            //but the direction is not blocked
            return "D" + rightMazeSolver(maze, "D", posX, posY+1)
        }

        //If to the right of direction is blank, 
        //turn right and move in that direction
        return "L" + rightMazeSolver(maze, "L", posX-1, posY)
    }

    return ''
}

let mySmallMaze = [
    [' ', ' ', ' '],
    ['*', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let x = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', '*', 'e']
];

//console.log(rightMazeSolver(mySmallMaze))
//console.log(rightMazeSolver(maze))
console.log(rightMazeSolver(x))


//Exercise 10

function anagram(string) {
    const output = [];
    function traverse(string, perm = '') {
        const seen = new Set();
        if (!string) output.push(perm)
        for (let i = 0; i < string.length; i++) {
            if (!seen.has(string[i])) {
                seen.add(string[i]);
                traverse(string.slice(0, i) + string.slice(i + 1), perm + string[i]);
            }
        }
    }
    traverse(string)
    return output
}

console.log(anagram("east"))

//Exercise 11

const hierarchy = {
    Zuckerberg: {
        Schroepfer: {
            Bosworth: [
                "Steve",
                "Kyle",
                "Andra"
            ],
            Zhao: [
                "Richie",
                "Sofia",
                "Jen"
            ]
        },
        Schrage: {
            VanDyck: [
                "Sabrina",
                "Michelle",
                "Josh"
            ],
            Swain: [
                "Blanch",
                "Tom",
                "Joe"
            ]
        },
        Sandberg: {
            Goler: [
                "Eddie",
                "Julie",
                "Annie"
            ],
            Hernandez: [
                "Rowi",
                "Inga",
                "Morgan"
            ],
            Moissinac: [
                "Amy",
                "Chuck",
                "Vinni"
            ],
            Kelley: [
                "Eric",
                "Ana",
                "Wes"
            ]
        }
    }
}

function printHierarchy(hierarchy, level=0) {
    const prefix = ' '.repeat(level*3)
    if(Array.isArray(hierarchy)) {
        for(const el of hierarchy) {
            console.log(prefix, el)
        }
    } else {
        for (const k in hierarchy) {
            console.log(prefix, k);
            printHierarchy(hierarchy[k], level+1);
        }
    }
}

printHierarchy(hierarchy)

//Exercise 12


const toBinary = function (num) {
    if (num === 0) {
        return 0
    }

    return num % 2 + 10 * toBinary(Math.floor(num / 2));
}
console.log(toBinary(25));