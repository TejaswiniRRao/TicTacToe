//File used for implementing functionalities for the configuration

function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid; //+'1' => 1
    playerConfigOverlayElement.style.display = 'block';
    backDropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backDropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
    event.preventDefault(); //if we don't mention this then the default behaviour of the form occurs which is sending a http request
    const formData = new FormData(event.target); //this function will go through the form and look for the attribute name and get it's value
    const enteredPlayerName =  formData.get('playername').trim();
    //console.log(enteredPlayerName);

    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = "Please enter a valid name";
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    /*if(editedPlayer === 1){
        players[0].name = enteredPlayerName;
    }
    else {
        players[1].name = enteredPlayerName;
    }*/

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}