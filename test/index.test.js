const assert = require('assert');
const garbageCollection = require("../index");

describe("Running basic test", () => {
	it("Basic test", () => {
		assert.equal(garbageCollection(["G", "P", "GP", "GG"], [2, 4, 3]), 21);
		assert.equal(garbageCollection(["MMM", "PGM", "GP"], [3, 10]), 37);
	})
})
