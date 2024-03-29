const db = require('../database');

const opiskelija = {
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opiskelija where idopiskelija=?', [id], callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (idopiskelija,Etunimi,Sukunimi,Osoite,Luokkatunnus) values(?,?,?,?,?)',
      [opiskelija.idopiskelija, opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.Osoite, opiskelija.Luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where idopiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set idOpiskelija=?,Etunimi=?, Sukunimi=?, Osoite=?, Luokkatunnus=? where idOpiskelija=?',
      [opiskelija.idOpiskelija, opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.Osoite, opiskelija.Luokkatunnus, id],
      callback
    );
  }
};
module.exports = opiskelija;