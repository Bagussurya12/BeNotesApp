const ClientError = require("./clientError");

class InvariantError extends ClientError {
  constructor(message) {}
}
module.exports = InvariantError;
