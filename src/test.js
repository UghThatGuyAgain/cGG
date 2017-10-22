const {cGG} = require("./main.js")
const {config} = require("./settings.js")
const assert = require("assert")

const api = new cGG(config.testingKey)

describe("cGG", () => {
  describe("#champions()", () => {
    it("doesn't have tags", () => {
      return api.champions()
      .then(data => {
        assert.ok(data)
        assert.equal(data[0]._id.championId, 18)
      })
    })
    it("has multiple tags", () => {
      return api.champions({"champData": ["kda", "damage", "minions"], "elo": ["SILVER"]})
      .then(data => {
        assert.ok(data)
        assert.equal(data[0].elo, "SILVER")
        assert.equal()
      })
    })
  })
})