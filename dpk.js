const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    candidate = getCandidateFromEvent(event);
  }
  if (!isString(candidate)) {
    candidate = stringifyData(candidate);
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createCryptoHash(candidate);
  }
  return candidate;
};

function isString(data) {
  return typeof data === "string";
}

function getCandidateFromEvent(event) {
  if (event.partitionKey) {
    return event.partitionKey;
  }
  const data = stringifyData(event);
  return createCryptoHash(data);
}

function stringifyData(data) {
  return JSON.stringify(data);
}

function createCryptoHash(data) {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}
