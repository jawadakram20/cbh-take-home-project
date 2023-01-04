const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return the candidate value if it is a string and under the max length", () => {
    const event = { partitionKey: "abc" };
    const result = deterministicPartitionKey(event);

    expect(result).toBe("abc");
  });

  it("should stringify the candidate value if it is not a string and under the max length", () => {
    const event = { partitionKey: { abc: 123 } };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(JSON.stringify({ abc: 123 }));
  });

  it("returns sha3-512 hash of partition key when it is longer than 256 characters", () => {
    const event = {
      partitionKey: "a".repeat(300),
    };
    const result = deterministicPartitionKey(event);
    const expected = crypto
      .createHash("sha3-512")
      .update(event.partitionKey)
      .digest("hex");
    expect(result).toBe(expected);
  });

  it("returns sha3-512 hash when no partition key is given", () => {
    const event = "this is a test string";
    const expected = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expected);
  });
});
