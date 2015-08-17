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

app.use(express.static('public'));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

routes.init(app);

app.get('/*', (req, res) => {

  let flux = new Flux();

  Router.run(sharedRoutes, req.url, (Handler, state) => {

    // Get the stuff you need to set state
    postModel.fetchAll().then((posts) => {
      try {

        // Set the state in the flux store
        flux.getActions('posts').hydratePosts(posts);

        // Serialize the state (to put in the DOM)
        let initialState = flux.serialize();

        // This is automatically mounted as params, but doing it explicitly for readability
        let params = state.params;

        // Render the component to a string with state passed in
        let content = React.renderToString(<Handler flux={flux} params={params} />);

        // Send the string content and initial state to the client
        res.render('index', { content: content, initialState: initialState });
      } catch (e) {
        res.send(e.stack);
      }
    });
  });
});

app.listen(8080);
