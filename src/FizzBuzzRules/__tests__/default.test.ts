import Default from "../Default"

test('Ao executar o método validate com números não divisiveis por 2, 3 e 5 deve retornar true', () => {
    const expectedValue = true
    const def = new Default()
    const result = def.validate(7)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método validate com números divisiveis por 2, 3 e 5 deve retornar true', () => {
    const expectedValue = false
    const def = new Default()
    const result = def.validate(30)
    expect(expectedValue).toEqual(result)
})



test('Ao executar o método perform com números não divisiveis por 2, 3 e 5 deve retornar o próprio valor', () => {
    const expectedValue = '7'
    const def = new Default()
    const result = def.perform(7)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números  divisiveis por 2, 3 e 5 deve retornar uma string vazia', () => {
    const expectedValue = ''
    const def = new Default()
    const result = def.perform(3)
    expect(expectedValue).toEqual(result)
})







