import * as React from 'react';
import PurchaseSummary from './components/PurchaseSummary'
import {ScrollView} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import itemReducer from './redux/reducer';


const store = createStore(itemReducer);

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