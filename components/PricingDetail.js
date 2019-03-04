import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Tooltip from './Tooltip'
import Item from './Item';
import { connect } from 'react-redux';

function PricingDetail({pricingDetails}) {
  const { subtotal, savings, tax, total } = pricingDetails;
  return (
    <>
      <Item>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.subtotal}>${subtotal.toFixed(2)}</Text>
      </Item>
      <Item>
        <Tooltip 
          content={"Pickup your order in store helps cut costs, and we pass the savings on to you."}>
          <Text style={styles.savingsLabel}>Pickup Savings</Text>
        </Tooltip>
        <Text style={styles.savings}>-${savings}</Text>
      </Item>
      <Item>
        <View>
          <Text style={styles.taxLabel}>Est. tax and fees</Text>
          <Text style={styles.taxLabelInfo}> (Based on 94085)</Text>
        </View>
        <Text style={styles.subtotal}>${tax}</Text>
      </Item>
      <Item>
        <Text style={styles.totalLabel}>Est total</Text>
        <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
      </Item>
    </>
  );
}

const labelStyle = {
  padding: 10,
  fontSize: 16,
}
const styles = StyleSheet.create({
  label: {
    ...labelStyle
  },
  subtotal: {
    ...labelStyle,
    textAlign: 'right',
    fontWeight: 'bold'
  },
  savingsLabel: {
    padding: 10,
    fontSize: 16,
    textDecorationLine: 'underline'
  },
  savings: {
    ...labelStyle,
    fontWeight: 'bold',
    color: '#ff0000',
    textAlign: 'right'
  },
  taxLabel: {
    ...labelStyle,
    paddingBottom: 0,
  },
  taxLabelInfo: {
    ...labelStyle,
    paddingTop: 0,
    flexWrap: "wrap"
  },
  totalLabel: {
    ...labelStyle,
    fontSize: 20,
    fontWeight: 'bold'
  },
  totalPrice: {
    padding: 10,
    paddingTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right'
  }
});

const mapStateToProps = (state) => {
  const { pricingDetails } = state.item;
  return { pricingDetails }
};

export default connect(mapStateToProps)(PricingDetail)