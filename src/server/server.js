require("babel/register");
import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import React from 'react';
import Router from 'react-router';
import routes from './routes';
import sharedRoutes from '../shared/routes';
import Flux from '../shared/flux';
import postModel from './posts/post_model';

const app = express();
const flux = new Flux();

app.use(express.static('public'));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

routes.init(app);

app.get('/*', (req, res) => {
  Router.run(sharedRoutes, req.url, (Handler, state) => {

    postModel.all().then((posts) => {
      flux.getActions('posts').hydratePosts(posts);
      let initialState = flux.serialize();

      let params = state.params;
      let content = React.renderToString(<Handler flux={flux} params={params} />);

      res.render('index', { content: content, initialState: initialState });
    });
  });
});

app.listen(8080);
