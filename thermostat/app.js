import {Thermostat} from './src/thermostat.js'

window.addEventListener('load', function() {
    const thermostat = new Thermostat()

    const tempElement = document.getElementById("temperature")
    const upButton = document.getElementById("up-button")
    const downButton = document.getElementById("down-button")
    const resetButton = document.getElementById("reset-button")

    upButton.addEventListener("click",function(){
        tempElement.innerHTML = thermostat.increase()
    })
    downButton.addEventListener("click",function(){
        tempElement.innerHTML = thermostat.decrease()
    })
    resetButton.addEventListener("click",function(){
        tempElement.innerHTML = thermostat.reset()
    })

    tempElement.innerHTML = thermostat.temperature;

})
