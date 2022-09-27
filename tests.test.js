const { default: TestRunner } = require("jest-runner");
const addFive = require(`./tests-1`);

test('return the number plus 5', () => {
    expect(addFive(1)).toBe(6);
})

const { default:  TestRunner2 } = require("jest-runner");
const statusOfKeys = require(`./statusOfKeys`);

test('returns true if statusOfKeys exists', function() {
    expect(console.log).toBeCalled()
})