import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers/index';
import Test from './containers/redux-test';
import './App.css';

const store = createStore(reducer);

class App extends Component {
 render() {
    return (
      <Provider store={store}>
        <div className="content">
          <Test />
        </div>
      </Provider>
    );
  }
}

export default App;
