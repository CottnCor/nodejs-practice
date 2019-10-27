/**
 *
 */

const sqlite3 = require('sqlite3').verbose();

const dbName = 'later.sqlite';
const db = new sqlite3.Database(dbName);

/**
 *
 */
db.serialize(() => {
  const sql = `
  CREATE TABLE IF NOT EXISTS articles
  (id integer primary key, title, content TEXT)
  `;
  db.run(sql);
});

/**
 *
 */
class Article {

  constructor() { }

  /**
   *
   * @param {*} cb
   */
  static all (cb) {
    db.all('SELECT * FROM articles', cb);
  }

  /**
   *
   * @param {*} id
   * @param {*} cb
   */
  static find (id, cb) {
    db.get('SELECT * FROM articles WHERE id = ?', id, cb);
  }

  /**
   *
   * @param {*} data
   * @param {*} cb
   */
  static create (data, cb) {
    const sql = 'INSERT INTO articles(id, title, content) VALUES (?, ?, ?)';
    db.run(sql, data.id, data.title, data.content, cb);
  }

  /**
   *
   * @param {*} id
   * @param {*} cb
   */
  static delete (id, cb) {
    if (!id) return cb(new Error('Please provide an id'));
    db.run('DELETE FROM articles WHERE id = ?', id, cb);
  }
}

module.exports = db;
module.exports.Article = Article;