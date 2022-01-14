import FizzFoo from "../FizzFoo"

test('Ao executar o método validate com números divisiveis por 2 e 3 deve retornar true', () => {
    const expectedValue = true
    const fizzFoo = new FizzFoo()
    const result = fizzFoo.validate(6) 
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método validate com números não divisiveis por 2 e 3 deve retornar false', () => {
    const expectedValue = false
    const fizzFoo = new FizzFoo()
    const result = fizzFoo.validate(4)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números divisiveis por 2 e 3 deve retornar a palavra FizzFoo', () => {
    const expectedValue = 'FizzFoo'
    const fizzFoo = new FizzFoo()
    const result = fizzFoo.perform(6)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números não divisiveis por 2 e 3 deve retornar uma string vazia', () => {
    const expectedValue = ''
    const fizzFoo = new FizzFoo()
    const result = fizzFoo.perform(4)
    expect(expectedValue).toEqual(result)
})

