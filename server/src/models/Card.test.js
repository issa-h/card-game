const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const db = require('../db/config')
const Card = require('./Card')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sequelize.sync({ force: true })
  card = await Card.create({ 
    id: 1,
    name: 'card',
    mojo: 10,
    stamina: 82,
    imgURL: 'img'
})
})

// clear db after tests
afterAll(async () => await db.sequelize.sync({ force: true }))

describe('Card', () => {
  
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })

  it('should check name', async ()=> {
    expect(card.name).toBe('card')
  })

  it('should have correct mojo', async () => {
    expect(card.mojo).toBe(10)
  })

  it('should have correct stamina', async () => {
    expect(card.stamina).toBe(82)
  })

  it('should have a img url', async () => {
    expect(card.imgURL).toBe('img')
  })

})