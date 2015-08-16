require("babel/register");
import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import React from 'react';
import Router from 'react-router';
import routes from './routes';
import sharedRoutes from '../shared/routes';

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

routes.init(app);

app.get('/*', (req, res) => {
  Router.run(sharedRoutes, req.url, (Handler, state) => {
    let params = state.params;
    let content = React.renderToString(<Handler params={params} />);
    res.render('index', { content: content });
  });
});

app.listen(8080);
