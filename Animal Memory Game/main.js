import { createGrid, imgArr, shuffle, removeChildren } from "./util.js";
// all art assets come from https://game-icons.net/
window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const display = document.querySelector(".score");
    const winM = document.querySelector(".win");
    const btn = document.querySelector(".btn1");
    const correctTile = "./Assets/thumb-up.png";
    const dfltTile = "./Assets/uncertainty.png";

    let chosenTiles = [];
    let chosenIds = [];
    let tilesFound = 0;
    let secondArr = imgArr.slice();
    let shuffledArr = [];
    
    shuffle(secondArr, shuffledArr);
    createGrid(shuffledArr, container, dfltTile, tileFlip);

    function tileFlip() {
        const tileId = this.getAttribute("id");
        chosenTiles.push(shuffledArr[tileId].name);
        chosenIds.push(tileId);
        this.setAttribute("src", shuffledArr[tileId].image);
        if(chosenTiles.length === 2) setTimeout(checkMatch, 400);
    }

    function checkMatch() {
        const tiles = document.querySelectorAll("img");
        const numbId1 = chosenIds[0];
        const numbId2 = chosenIds[1];
        const tile1 = chosenTiles[0];
        const tile2 = chosenTiles[1];
        
        if(numbId1 === numbId2) {
            tiles[numbId1].setAttribute("src", dfltTile);
            tiles[numbId2].setAttribute("src", dfltTile)
        }
        if(tile1 === tile2 && numbId1 !== numbId2) {
            tilesFound++;
            tiles[numbId1].setAttribute("src", correctTile);
            tiles[numbId2].setAttribute("src", correctTile);
            tiles[numbId1].removeEventListener("click", tileFlip);
            tiles[numbId2].removeEventListener("click", tileFlip);
            if(tilesFound === shuffledArr.length / 2) {
                winM.textContent = "You Win! Perfect!";
            }
        }
        else {
            tiles[numbId1].setAttribute("src", dfltTile);
            tiles[numbId2].setAttribute("src", dfltTile);
        }
        display.textContent = tilesFound;
        chosenIds = [];
        chosenTiles = [];
    }

    btn.addEventListener("click", () => {
        winM.textContent = "";
        chosenTiles = [];
        chosenIds = [];
        tilesFound = 0;
        display.textContent = tilesFound;
        secondArr = imgArr.slice();
        shuffledArr = [];
        
        removeChildren(container);
        shuffle(secondArr, shuffledArr);
        createGrid(shuffledArr, container, dfltTile, tileFlip);
    })
});