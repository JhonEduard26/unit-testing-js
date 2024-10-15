// assertions or matchers

test('should be a obj', () => {
  const data = { name: 'John' }
  data.lastname = 'Doe'

  expect(data).toEqual({name: 'John', lastname: 'Doe'})
})

test('should be null', () => {
  const data = null
  expect(data).toBeNull()
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
})

test('should match a string', () => {
  const name = 'Cristopher'

  expect(name).toMatch(/stop/)
})

test('should contain a 3', () => {
  const numbers = [1, 2, 3, 4, 5]

  expect(numbers).toContain(3)
})

