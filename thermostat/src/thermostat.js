export class Thermostat {
    constructor(){
        this.temperature = 20;
        this.maxTemp = 25;
        this.isPowerSaving = true;
    }

    decrease(){
        if(this.temperature > 10){
            this.temperature --;
        }
        return this.temperature;
    }

    increase(){
        if(this.temperature < this.maxTemp){
            this.temperature ++;
        } 
        return this.temperature
    }

    powerSavingMode(){
        if(this.isPowerSaving === true){
            this.maxTemp = 32;
            this.isPowerSaving = false;
        } else if (this.isPowerSaving === false){
            if(this.maxTemp > 25){
                this.maxTemp = 25;
                this.isPowerSaving = true;
            }
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
