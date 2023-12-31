const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const db = require('../db/config')
const User = require('./User')


// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sequelize.sync({ force: true })
  user = await User.create({
    id: 1,
    username: 'gandalf' 
  })
})

// clear db after tests
afterAll(async () => await db.sequelize.sync({ force: true }))

describe('User', () => {
  
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })

  it('should check username', async ()=> {
    expect(user.username).toBe('gandalf')
  })
})
