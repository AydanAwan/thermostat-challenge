import {thermostat} from './src/thermostat.js'

const Thermostat = new thermostat()

const tempElement = document.getElementById("temperature")
const upButton = document.getElementById("up-button")
const downButton = document.getElementById("down-button")
const resetButton = document.getElementById("reset-button")

upButton.addEventListener("click",function(){
    tempElement.innerHTML = Thermostat.increase()
})
downButton.addEventListener("click",function(){
    tempElement.innerHTML = Thermostat.decrease()
})
resetButton.addEventListener("click",function(){
    tempElement.innerHTML = Thermostat.reset()
})
tempElement.innerHtmL = Thermostat.temperature