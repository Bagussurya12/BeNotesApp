const nanoid = require("nanoid");
class NotesService {
  constructor() {
    this._notes = [];
  }
  addNote({ title, body, tags }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
      title,
      tags,
      body,
      id,
      createdAt,
      updatedAt,
    };
    this._notes.push(newNote);

    // pengecekan
    const isSuccess = this._notes.filter((note) => note.id === id).length > 0;
    if (isSuccess) {
      throw new Error("Catatan gagal di tambahkan");
    }
    return id;
  }
  getNotes() {
    return this._notes;
  }
  getNoteById(id) {
    const note = this._notes.filter((n) => n.id === id)[0];

    if (!note) {
      throw new Error("catatan tidak di temukan");
    }
    return note;
  }
  editNoteById(id, { title, body, tags }) {
    const index = this._notes.findIndex((note) => note.id === id);

    if (index === -1) {
      throw new Error("Gagal memperbarui catatan, ID tidak di temukan");
    }
    const updatedAt = new Date().toISOString();
    this._notes[index] = {
      ...this._notes[index],
      title,
      tags,
      body,
      updatedAt,
    };
  }
  deleteNoteById(id) {
    const index = this._notes.findIndex((note) => note.id === id);

    if (index === -1) {
      throw new Error("catatan Gagal di hapus, ID tidak ditemukan");
    }
    this._notes.splice(index, 1);
  }
}

module.exports = NotesService;
