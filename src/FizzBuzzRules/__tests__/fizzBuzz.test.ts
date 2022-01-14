import FizzBuzz from "../FizzBuzz"

test('Ao executar o método validate com números divisiveis por 3 e 5 deve retornar true', () => {
    const expectedValue = true
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.validate(15) 
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método validate com números não divisiveis por 3 e 5 deve retornar false', () => {
    const expectedValue = false
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.validate(4)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números divisiveis por 3 e 5 deve retornar a palavra FizzBuzz', () => {
    const expectedValue = 'FizzBuzz'
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.perform(15)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números não divisiveis por 3 e 5 deve retornar uma string vazia', () => {
    const expectedValue = ''
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.perform(4)
    expect(expectedValue).toEqual(result)
})

