describe('setup', () => {
  beforeAll(() => {
    console.log('beforeAll')
  })

  test('case 1', () => {
    expect(1 + 1).toBe(2)    
  })

  test('case 2', () => {
    expect(1 + 5).toBe(6)    
  })
})