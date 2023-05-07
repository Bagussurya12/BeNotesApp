const InvariantError = require("../../exceptions/InvariantError");
const { NotePayloadSchema } = require("./schema");

const NotesValidator = {
  validateNotePayload: (payload) => {
    const valiadtionResult = NotePayloadSchema.validate(payload);
    if (valiadtionResult.error) {
      throw new InvariantError(valiadtionResult.error.message);
    }
  },
};

module.exports = NotesValidator;
