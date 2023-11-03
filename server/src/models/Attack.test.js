const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const db = require('../db/config')
const Attack = require('./Attack')


// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sequelize.sync({ force: true })
  attack = await Attack.create({ 
    id: 1,
    title: 'attack',
    mojoCost: 5,
    staminaCost: 12
})
})

// clear db after tests
afterAll(async () => await db.sequelize.sync({ force: true }))

describe('Card', () => {
  
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })

  it('should check name', async ()=> {
    expect(attack.title).toBe('attack')
  })

  it('should have correct mojo', async () => {
    expect(attack.mojoCost).toBe(5)
  })

  it('should have correct stamina', async () => {
    expect(attack.staminaCost).toBe(12)
  })

})