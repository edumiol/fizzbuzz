import Foo from "../Foo"

test('Ao executar o método validate com números divisiveis por 2 deve retornar true', () => {
    const expectedValue = true
    const foo = new Foo()
    const result = foo.validate(4)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método validate com números não divisiveis por 2 deve retornar false', () => {
    const expectedValue = false
    const foo = new Foo()
    const result = foo.validate(5)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números divisiveis por 2 deve retornar a palavra Foo', () => {
    const expectedValue = 'Foo'
    const foo = new Foo()
    const result = foo.perform(8)
    expect(expectedValue).toEqual(result)
})

test('Ao executar o método perform com números não divisiveis por 2 deve retornar uma string vazia', () => {
    const expectedValue = ''
    const foo = new Foo()
    const result = foo.perform(7)
    expect(expectedValue).toEqual(result)
})

