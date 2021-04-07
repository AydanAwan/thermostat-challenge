export class thermostat{
    constructor(){
        this.temperature = 20
    }
    decrease(){
        this.temperature -= 1
    }
    increase(){
        this.temperature += 1
    }
    get temp(){
        return this.temperature
    }
    
}
