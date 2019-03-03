import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getItemDetails } from './../Api';

import { Constants } from 'expo'


import { Card } from 'react-native-paper';

import PricingDetail from './PricingDetail';
import ItemDetail from './ItemDetail';
import PromoCode from './PromoCode'

import { setLoading, setItemDetails } from './../redux/reducer';


class PurchaseSummary extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.props.setLoading();
    const item = await getItemDetails();
    this.props.setItemDetails(item);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.purchaseSummary}>
          {this.props.loaded && <Card style={styles.purchaseSummaryCard}>
            <PricingDetail />              
            <View>
              <ItemDetail />
              <PromoCode />
            </View>
          </Card>}
          {!this.props.loaded && <Text>Loading</Text>}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  purchaseSummary: {
    height: '100%',
    padding: 10,
    paddingTop: 20
  },
  purchaseSummaryCard: {
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
});


const mapStateToProps = (state) => {
  const { loaded } = state.item;
  return { loaded };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLoading,
    setItemDetails,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSummary);