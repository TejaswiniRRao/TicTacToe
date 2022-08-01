function openPlayerConfig(){
    playerConfigOverlayElement.style.display = 'block';
    backDropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backDropElement.style.display = 'none';
}

function savePlayerConfig(event){
    event.preventDefault(); //if we don't mention this then the default behaviour of the form occurs which is sending a http request
    const formData = new FormData(event.target); //this function will go through the form and look for the attribute name and get it's value
    const enteredPlayerName =  formData.get('playername');
    console.log(enteredPlayerName);
}