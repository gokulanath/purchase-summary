import * as React from 'react';
import PurchaseSummary from './components/PurchaseSummary'
import {ScrollView} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import itemReducer from './redux/reducer';


const store = createStore(
  itemReducer,
  applyMiddleware(thunk)
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
      <ScrollView>
        <PurchaseSummary />
      </ScrollView>
      </Provider>
    );
  }
}