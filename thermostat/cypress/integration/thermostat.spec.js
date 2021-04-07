import {thermostat} from '../../src/thermostat.js'
describe('changing the tempeture on the thermostst', function(){
    it('testing starting temp', function(){
        let test = new thermostat
        let output = test.temp
        expect(output).to.equal(20)
    })
    it('testing increase temp', function(){
        let test = new thermostat
        test.increase()
        let output = test.temp
        expect(output).to.equal(21)
    })
    it('testing decrease temp', function(){
        let test = new thermostat
        test.decrease()
        let output = test.temp
        expect(output).to.equal(19)
    })
})