import {Calculator} from './testService'

describe('testservice',() =>{
    it('should add two numbers' ,()=>{
        const service = new Calculator();
        expect(service.add(2,2)).toBe(4);
    });
    it('should substract two numbers',()=>{
        const service = new Calculator();
        expect(service.sub(2,2)).toBe(0);
    });
    it('should multiply two numbers',()=>{
        const service = new Calculator();
        expect(service.mul(2,2)).toBe(4);
    })
});