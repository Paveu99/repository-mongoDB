const { ObjectId, ObjectID } = require('mongodb');

class TodoRecord {
  constructor(obj) {
    this._id = ObjectId(obj._id); // aby zamieniać w obiekt od razu to co ludzie wpiszą jako id
    this.title = obj.title;
    this._validate();
  }

  _validate() {
    if (this.title.trim() < 5) { // jeżeli po usunięciu spacji tytuł ma ciągle 5 znaków to jest za krótki
      throw new Error('Todo title should be at least 5 characters.');
    }

    if (this.title.length > 150) {
      throw new Error('To do title should be at most 150 characters.');
    }
  }
}

module.exports = {
  TodoRecord,
};
