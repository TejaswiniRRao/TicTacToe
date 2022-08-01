function startNewGame(){

    if(players[0].name === '' || players[1].name === ''){
        return;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }
    else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event){

    if(event.target.tagName !== 'LI'){  //If you click somewhere in the gap also, nothing changes else it would turn the activeplayer's symbol
        return;
    }

    const selectedField = event.target;
    const selectedColumn =  selectedField.dataset.col - 1;
    const selectedRow =  selectedField.dataset.row - 1;

    if(gameData[selectedRow][selectedColumn] > 0){
        alert('Please select an empty field');
        return;
    }

    selectedField.textContent = players[activePlayer].symbol; //players[0]
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData)

    switchPlayer();
}