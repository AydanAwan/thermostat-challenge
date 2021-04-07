export class thermostat {
    constructor(){
        this.temperature = 20;
        this.maxTemp = 25;
    }

    decrease(){
        if(this.temperature > 10){
            return this.temperature --;
        } else {
            return 'Minimum temperature has been reached';
        }
    }

    increase(){
        if(this.temperature < this.maxTemp){
            return this.temperature ++;
        } else {
            return 'Maximum temperature has been reached';
        }
    }

    get temp(){
        return this.temperature;
    }

    powerSavingMode(turnedOn){
        if(turnedOn === true){
            return this.maxTemp = 25;
        } else if (turnedOn === false){
            return this.maxTemp = 32;
        } else {
            return 'Invalid input';
        }
    }

    reset(){
        return this.temperature = 20;
    }
    colour(){
        switch(true){
            case (this.temperature<18):
                return 'low usage'
            case (this.temperature>=18 && this.temperature<= 25):
                return 'medium usage'
            case (this.temperature>25):
                return 'high usage'   
        }


    }

    
}
