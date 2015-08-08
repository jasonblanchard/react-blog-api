import express from 'express';
import exphbs from 'express-handlebars';
import React from 'react';
import App from '../shared/components/app';

const app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/*', (req, res) => {
  let content = React.renderToString(<App/>);
  res.render('index', { content: content });
});

app.listen(8080);
