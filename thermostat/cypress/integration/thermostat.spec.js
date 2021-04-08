import {Thermostat} from '../../src/thermostat.js'
describe('changing the tempeture on the thermostst', function(){
    it('testing starting temp', function(){
        let test = new Thermostat
        let output = test.temp
        expect(output).to.equal(20)
    })
    it('testing increase temp', function(){
        let test = new Thermostat
        test.increase()
        let output = test.temp
        expect(output).to.equal(21)
    })
    it('testing decrease temp', function(){
        let test = new Thermostat
        test.decrease()
        let output = test.temp
        expect(output).to.equal(19)
    })
    it('testing decrease temp past min', function(){
        let test = new Thermostat
        for(let i =0; i <10; i++){
            test.decrease()
        }
        let output = test.decrease()
        expect(output).to.equal('Minimum temperature has been reached')
    })
    it('testing increase temp past power saver temp when on', function(){
        let test = new Thermostat
        for(let i =0; i <5; i++){
            test.increase()
        }
        let output = test.increase()
        expect(output).to.equal('Maximum temperature has been reached')
    })
    it('testing increase temp past power saver temp when off', function(){
        let test = new Thermostat
        test.powerSavingMode(false)
        for(let i =0; i <6; i++){
            test.increase()
        }
        let output = test.temp
        expect(output).to.equal(26)
    })
    it('testing reseting temp', function(){
        let test = new Thermostat
        test.decrease()
        test.reset()
        let output = test.temp
        expect(output).to.equal(20)
    })
    it('testing low usage temp', function(){
        let test = new Thermostat
        test.temperature = 16
        let output = test.colour()
        expect(output).to.equal('low usage')
    })
    it('testing medium usage temp', function(){
        let test = new Thermostat
        test.temperature = 21
        let output = test.colour()
        expect(output).to.equal('medium usage')
    })
    it('testing high usage temp', function(){
        let test = new Thermostat
        test.temperature = 300
        let output = test.colour()
        expect(output).to.equal('high usage')
    })
})