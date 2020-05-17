import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import rootReducer from './redux/rootReducer';
import tasks from './modules/tasks';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(ReduxThunk)));
  }
  render() {
    return (
      <Provider store={this.store}>
        <BrowserRouter>
          <Route path="/" component={tasks.Tasks} />
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;