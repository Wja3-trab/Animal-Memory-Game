export {createGrid, imgArr, shuffle, removeChildren};
//Will be put in this file. This makes main.js easier to read.
//Array will also be stored here since they can take a lot of space
//I believe doing this will help me to have better code in general

//image arr
const imgArr = [
    {
        name: "owl",
        image: "./Assets/barn-owl.png"
    },
    {
        name: "owl",
        image: "./Assets/barn-owl.png"
    },
    {
        name: "cat",
        image: "./Assets/cat.png"
    },
    {
        name: "cat",
        image: "./Assets/cat.png"
    },
    {
        name: "dolphin",
        image: "./Assets/dolphin.png"
    },
    {
        name: "dolphin",
        image: "./Assets/dolphin.png"
    },
    {
        name: "hyena",
        image: "./Assets/hyena-head.png"
    },
    {
        name: "hyena",
        image: "./Assets/hyena-head.png"
    },
    {
        name: "penguin",
        image: "./Assets/penguin.png"
    },
    {
        name: "penguin",
        image: "./Assets/penguin.png"
    },
    {
        name: "porcupine",
        image: "./Assets/porcupine.png"
    },
    {
        name: "porcupine",
        image: "./Assets/porcupine.png"
    },
    {
        name: "sloth",
        image: "./Assets/sloth.png"
    },
    {
        name: "sloth",
        image: "./Assets/sloth.png"
    },
    {
        name: "tiger",
        image: "./Assets/tiger-head.png"
    },
    {
        name: "tiger",
        image: "./Assets/tiger-head.png"
    }
];

//randomize given array into a second array and removing the chosen elem from the first
function shuffle(ogArr, nwArr) {
    for(let i = ogArr.length -1; i>= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        nwArr.push(ogArr[j]);
        ogArr.splice(j, 1);
    }
}

//This function will iterate through our image array to form our game board/grid
function createGrid(arr, board, png, func) {
    for(let i = 0; i < arr.length; i++) {
        const tile = document.createElement("img");
        tile.setAttribute("src", png)
        tile.setAttribute("id", i);
        tile.addEventListener("click", func)
        board.appendChild(tile);
    }
}

//Remove all children of a node by iterating through it
//with every iteration the last child will be removed
function removeChildren(node) {
    while(node.firstChild) {
        node.removeChild(node.lastChild);
    }
}
