// For this Tic-Tac-Tow project, I would like to have the following features:
// 1. Start by asking the user for their name
// 2. Gameboard will appear and user can select a spot to place their marker
// 3. Bot will have their turns (checking win conditions after every turn)
// 4. If player meets win condition, display text congratulating winner

function gameBoard() {
    const gameBoard = [0, 1, 2, 3, 4, 5, 6 , 7, 8]

    return {gameBoard}
}

function createPlayer(name, marker) {
    const name = name;
    const marker = marker;
    const positions = [];

 
    const positionsMarked = () => positions //might not need this function

    return {name, marker, positionsMarked}
}

function gameFlow() {
    //PLayer inputs name and chooses a marker

    //display gameboard
    
    //cache DOM

    //bind events

    //
}