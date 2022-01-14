import BuzzFoo from "../BuzzFoo"

test('Ao executar o método validate com números divisiveis por 2 e 5 deve retornar true', () => {
    const expectedValue = true
    const buzzFoo = new BuzzFoo()
    const result = buzzFoo.validate(10) 
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método validate com números não divisiveis por 2 e 5 deve retornar false', () => {
    const expectedValue = false
    const buzzFoo = new BuzzFoo()
    const result = buzzFoo.validate(7)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números divisiveis por 2 e 5 deve retornar a palavra BuzzFoo', () => {
    const expectedValue = 'BuzzFoo'
    const buzzFoo = new BuzzFoo()
    const result = buzzFoo.perform(10)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números não divisiveis por 2 e 5 deve retornar uma string vazia', () => {
    const expectedValue = ''
    const buzzFoo = new BuzzFoo()
    const result = buzzFoo.perform(4)
    expect(expectedValue).toEqual(result)
})

