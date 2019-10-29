/**
 *
 */
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const Article = require('./models/article').Article;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 *
 */
app.set('port', process.env.PORT || 3000);

/**
 *
 */
app.get('/articles', (req, res, next) => {
  Article.all((err, articles) => {
    if (err) return next(err);
    res.send(articles);
  });
});

/**
 *
 */
app.post('/articles', (req, res, next) => {
  const id = 'uuid';
  const article = { id, ...req.body };
  Article.create(article, (err, article) => {
    if (err) return next(err);
    res.send({ id });
  });
});

/**
 *
 */
app.get('/articles/:id', (req, res, next) => {
  const id = req.params.id;
  Article.find(id, (err, article) => {
    if (err) return next(err);
    res.send(article);
  });
});

/**
 *
 */
app.delete('/articles/:id', (req, res, next) => {
  const id = req.params.id;
  Article.delete(id, (err) => {
    if (err) return next(err);
    res.send({ message: 'Deleted' });
  });
});

/**
 *
 */
app.listen(app.get('port'), () => {
  console.log('App started on port', app.get('port'));
});

module.exports = app;