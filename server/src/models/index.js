const Attack = require('./Attack');
const Card = require('./Card');
const Deck = require('./Deck');
const User = require('./User');

// import the rest of your models above

//set up the associations here
User.hasOne(Deck);
Deck.belongsTo(User);

Card.belongsTo(Deck);
Deck.hasMany(Card);

Attack.belongsToMany(Card, { through: 'CardAttack' });
Card.belongsToMany(Attack, { through: 'CardAttack' });

// and then export them all below
module.exports = { User, Deck, Card, Attack }
