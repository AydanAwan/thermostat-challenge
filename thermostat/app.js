import {Thermostat} from './src/thermostat.js'
let savingbutonstate = true


window.addEventListener('load', function() {

    function colour() {
        switch(true){
            case (thermostat.temperature < 18):
                tempElement.style.color = "green";
                break;
            case (thermostat.temperature >= 18 && thermostat.temperature < 25):
                tempElement.style.color = "yellow";
                break;
            case (thermostat.temperature >= 25):
                tempElement.style.color = "red";   
                break;
        }
    }
    const thermostat = new Thermostat()

    const tempElement = document.getElementById("temperature")
    const upButton = document.getElementById("up-button")
    const downButton = document.getElementById("down-button")
    const resetButton = document.getElementById("reset-button")
    const powersavingbutton = document.getElementById("powersaving-button");
    


    upButton.addEventListener("click",function(){
        tempElement.innerHTML = thermostat.increase();
        colour();
    })
    downButton.addEventListener("click",function(){
        tempElement.innerHTML = thermostat.decrease()
        colour();
    })
    resetButton.addEventListener("click",function(){
        tempElement.innerHTML = thermostat.reset();
        colour();
    })
    powersavingbutton.addEventListener("click",function() {
        tempElement.innerHTML = thermostat.powerSavingMode()
        if(savingbutonstate === true){
            powersavingbutton.style.backgroundColor = 'red';
            savingbutonstate = false;
        } else if(savingbutonstate === false){
           powersavingbutton.style.backgroundColor = 'green';
            savingbutonstate = true;
        }
    })

    tempElement.innerHTML = thermostat.temperature;

})
