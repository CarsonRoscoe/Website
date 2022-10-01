import add from "@utils/add"

describe("add", () => {
  describe("should add numbers", () => {
    it("when both are positive", () => {
      expect(add(1, 2)).toEqual(3)
    })
  })
})
