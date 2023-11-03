const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const db = require('../db/config')
const Deck = require('./Deck')

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await db.sequelize.sync({ force: true })
  deck = await Deck.create({ 
    id: 1,
    name: 'deck',
    xp: 1000 })
})

// clear db after tests
afterAll(async () => await db.sequelize.sync({ force: true }))

describe('Deck', () => {
  
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

  it('should check name', async ()=> {
    expect(deck.name).toBe('deck')
  })

  it('should have correct xp', async () => {
    expect(deck.xp).toBe(1000)
  })
})