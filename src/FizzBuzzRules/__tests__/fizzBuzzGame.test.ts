import FizzBuzzGame from '../FizzBuzzGame';

test.each([
    ['3', 9, 'Fizz'],
    ['5', 25, 'Buzz'],
    ['3 e 5', 15, 'FizzBuzz'],
    ['2', 4, 'Foo'],
    ['2 e 3', 6, 'FizzFoo'],
    ['2 e 5', 10, 'BuzzFoo'],
    ['2, 3 e 5', 30, 'FizzBuzzFoo'],
])(
    'Números divisiveis por %p como %p devem ser substituidos pela palavra %p',
    (description, value, expected) => {
        const fizzBuzzGame = new FizzBuzzGame()
        const result = fizzBuzzGame.play(value)
        expect(expected).toEqual(result) 
    }
)

test('Números não divisiveis por 2, 3 e 5 devem ser retornados', () => {
    const expectedValue = '7'
    const fizzBuzzGame = new FizzBuzzGame()
    const result = fizzBuzzGame.play(7)
    expect(expectedValue).toEqual(result)
})

test('Números não divisiveis por 2, 3 e 5 devem ser retornados', () => {
    const expectedValue = ""
    const fizzBuzzGame = new FizzBuzzGame()
    const result = fizzBuzzGame.play(-7)
    expect(expectedValue).toEqual(result)
})