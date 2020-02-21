import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import { CreateArticle, EditArticle, ShowArticle, Articles } from './';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route path="/articles/new" component={CreateArticle} />
      <Route path="/articles/:id/edit" component={EditArticle} />
      <Route path="/articles/:id" component={ShowArticle} />
      <Route path="/articles" component={Articles} />
    </Switch>
  </Provider>
);

export default App;
