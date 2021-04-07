export class thermostat {
    constructor(){
        this.temperature = 20;
        this.maxTemp = 25;
    }

    decrease(){
        if(this.temperature >= 10){
            this.temperature -= 1;
        } else {
            return 'Minimum temperature has been reached';
        }
    }

    increase(){
        if(this.temperature <= this.maxTemp){
            this.temperature += 1;
        } else {
            return 'Maximum temperature has been reached';
        }
    }

    get temp(){
        return this.temperature;
    }

    powerSavingMode(turnedOn){
        if(turnedOn === true){
            this.maxTemp = 25;
        } else if (turnedOn === false){
            this.maxTemp = 32;
        } else {
            return 'Invalid input';
        }
    }

    reset(){
        this.temperature = 20;
    }
    
}
