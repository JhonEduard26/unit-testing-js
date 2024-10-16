const Person = require('./06-person')

describe('Person', () => {
  let person

  beforeEach(() => {
    person = new Person('', 0, 0)
  })

  it('should return down', () => {
    person.weight = 50
    person.height = 1.75
    expect(person.calcIMC()).toBe('down')
  })

  it('should return normal', () => {
    person.weight = 60
    person.height = 1.75
    expect(person.calcIMC()).toBe('normal')
  })

  it('should return overweight', () => {
    person.weight = 80
    person.height = 1.75
    expect(person.calcIMC()).toBe('overweight')
  })
})