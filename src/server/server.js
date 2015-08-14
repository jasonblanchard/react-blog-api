import express from 'express';
import exphbs from 'express-handlebars';
import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';
import a11y from 'react-a11y';
a11y(React);

const app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/*', (req, res) => {
  Router.run(routes, req.url, (Handler, state) => {
    let params = state.params;
    let content = React.renderToString(<Handler params={params} />);
    res.render('index', { content: content });
  });
});

app.listen(8080);
