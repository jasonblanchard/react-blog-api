import express from 'express';
import exphbs from 'express-handlebars';
import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';

const app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/*', (req, res) => {
  Router.run(routes, req.url, (Handler) => {
    let content = React.renderToString(<Handler />);
    res.render('index', { content: content });
  });
});

app.listen(8080);