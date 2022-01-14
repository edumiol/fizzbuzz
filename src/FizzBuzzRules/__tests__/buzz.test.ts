import Buzz from "../Buzz"

test('Ao executar o método validate com números divisiveis por 5 deve retornar true', () => {
    const expectedValue = true
    const buzz = new Buzz()
    const result = buzz.validate(5)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método validate com números não divisiveis por 5 deve retornar false', () => {
    const expectedValue = false
    const buzz = new Buzz()
    const result = buzz.validate(4)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números divisiveis por 5 deve retornar a palavra Buzz', () => {
    const expectedValue = 'Buzz'
    const buzz = new Buzz()
    const result = buzz.perform(5)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números não divisiveis por 5 deve retornar uma string vazia', () => {
    const expectedValue = ''
    const buzz = new Buzz()
    const result = buzz.perform(4)
    expect(expectedValue).toEqual(result)
})

