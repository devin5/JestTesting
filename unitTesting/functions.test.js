const functions = require("./functions");

// test("test name", () => {
//     arrange
//     act
//     assert

// })

test("adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
test("adds 2 + 2 to not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});
//null === falsy === undefined === 0
test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
test("should be Brad Dias obj", () => {
  const obj = { firstName: "brad", lastName: "Dias" };
  expect(functions.createUser()).toEqual(obj);
});
