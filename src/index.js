import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Notes from './containers/Notes';
import Home from './components/Home';
import CreateNotes from './containers/CreateNoteForm';
import store from './store';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/" exact component={Home} />
        <Route path="/notes" component={Notes} />
        <Route path="/create" component={CreateNotes} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
