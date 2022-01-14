import Fizz from "../Fizz"

test('Ao executar o método validate com números divisiveis por 3 deve retornar true', () => {
    const expectedValue = true
    const fizz = new Fizz()
    const result = fizz.validate(9)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método validate com números não divisiveis por 3 deve retornar false', () => {
    const expectedValue = false
    const fizz = new Fizz()
    const result = fizz.validate(4)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números divisiveis por 3 deve retornar a palavra Fizz', () => {
    const expectedValue = 'Fizz'
    const fizz = new Fizz()
    const result = fizz.perform(3)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números não divisiveis por 3 deve retornar uma string vazia', () => {
    const expectedValue = ''
    const fizz = new Fizz()
    const result = fizz.perform(4)
    expect(expectedValue).toEqual(result)
})

