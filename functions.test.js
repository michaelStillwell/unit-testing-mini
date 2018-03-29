const { returnTo, greeting, add, subtract, multiply, divide } = require('./functions');

test('returnTo should return the number 2', () => {
    expect(returnTo()).toEqual(2);
});

test('greeting should return a greeting', () => {
    expect(greeting('James')).toEqual('Hello, James.');
    expect(greeting('Jill')).toEqual('Hello, Jill.');
});

describe('math functions', () => {
    test('add should return the sum of the two parameters', () => {
        expect(add(1,2)).toEqual(3);
        expect(add(3,5)).toEqual(8);
        expect(add(.1,.2)).toEqual(.3);
    });
    
    test('add should return the sum of the two parameters', () => {
        expect(subtract(2,1)).toEqual(1);
        expect(subtract(5,3)).toEqual(2);
    });

    test('add should return the sum of the two parameters', () => {
        expect(multiply(1,2)).toEqual(2);
        expect(multiply(3,5)).toEqual(15);
    });
    
    test('add should return the sum of the two parameters', () => {
        expect(divide(3,1)).toEqual(3);
        expect(divide(10,5)).toEqual(2);
    });
});