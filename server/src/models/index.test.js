const { sequelize } = require("../db/config");
const Deck = require("./Deck");
const User = require("./User");




describe("associations", () => {
    beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });
  it("should associate a user with a deck", async () => {
    const user = await User.create({ username: "gandalf" });
    const deck = await Deck.create({ name: "deck" });

    await user.setDeck(deck);

    const associatedDeck = await user.getDeck();

    expect(associatedDeck.name).toBe("deck");
  });
});
