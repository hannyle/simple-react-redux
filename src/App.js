import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ItemList from './components/ItemList';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <ItemList/>
      </Provider>
    );
  }
}

export default App;
