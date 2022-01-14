import FizzBuzzFoo from "../FizzBuzzFoo"

test('Ao executar o método validate com números divisiveis por 2, 3 e 5 deve retornar true', () => {
    const expectedValue = true
    const fizzBuzzFoo = new FizzBuzzFoo()
    const result = fizzBuzzFoo.validate(30) 
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método validate com números não divisiveis por 2, 3 e 5 deve retornar false', () => {
    const expectedValue = false
    const fizzBuzzFoo = new FizzBuzzFoo()
    const result = fizzBuzzFoo.validate(4)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números divisiveis por 2, 3 e 5 deve retornar a palavra FizzBuzzFoo', () => {
    const expectedValue = 'FizzBuzzFoo'
    const fizzBuzzFoo = new FizzBuzzFoo()
    const result = fizzBuzzFoo.perform(30)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números não divisiveis por 2, 3 e 5 deve retornar uma string vazia', () => {
    const expectedValue = ''
    const fizzBuzzFoo = new FizzBuzzFoo()
    const result = fizzBuzzFoo.perform(4)
    expect(expectedValue).toEqual(result)
})

