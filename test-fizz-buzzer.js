const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');


//in normal cases it should return a number or 
//a string based on its numerical value
describe('fizzBuzzer', function() {
    it('should return a number or a string', function() {
       //this function only takes one argument
       //argument must be a whole number
        const normalCases = [
            {a: 30, expected: 'fizz-buzz'},
            {a: 10, expected: 'buzz'},
            {a: 9, expected: 'fizz'},
            {a: 7, expected: 7}
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise error if args not numbers', function() {
        const badInputs = [
            ['a'],
            [true],
            [undefined],
            [-9]
        ];
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input['three']);
            }).to.throw(Error);
        });
    });
})