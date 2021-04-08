import {Thermostat} from './src/thermostat.js'
let savingbutonstate = true
window.addEventListener('load', function() {
    const thermostat = new Thermostat()

    const tempElement = document.getElementById("temperature")
    const upButton = document.getElementById("up-button")
    const downButton = document.getElementById("down-button")
    const resetButton = document.getElementById("reset-button")
    const powersavingbutton = document.getElementById("powersaving-button");


    upButton.addEventListener("click",function(){
        tempElement.innerHTML = thermostat.increase()
    })
    downButton.addEventListener("click",function(){
        tempElement.innerHTML = thermostat.decrease()
    })
    resetButton.addEventListener("click",function(){
        tempElement.innerHTML = thermostat.reset()
    })
    powersavingbutton.addEventListener("click",function(){
        tempElement.innerHTML = thermostat.powerSavingMode()
        // if(savingbutonstate === true){
        //     property.style.backgroundColor = "#FFFFFF"
        //     savingbutonstate = false;
        // } else if (savingbutonstate === false){
        //     property.style.backgroundColor = "#7FFF00"
        //     savingbutonstate = true;
        // }
    })

    tempElement.innerHTML = thermostat.temperature;

})
