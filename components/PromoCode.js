import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Accordion, {AccordionToggler, AccordionContent} from './Accordion'

import { applyDiscount } from './../redux/reducer';

class PromoCode extends React.Component {
  state = {code: ''};
  constructor(props){
    super(props);
  }

  applyDiscount() {
    console.log('applying code', this.state.code);
    if(this.props.itemDetails.discountCode === this.state.code) {
      console.log('applying code inside', this.state.code);
      this.props.applyDiscount();
    }
  }

  componentDidMount() {
    if(this.props.codeApplied) {
      this.setState({
        code: this.props.itemDetails.discountCode
      });
    }
  }

  render() {

    return (
      <Accordion>
        <AccordionToggler>
          {
            (isOpen, toggleAccordion) => (
              <TouchableOpacity
                onPress={toggleAccordion} 
              >
                <View>
                  <Text style = {styles.title}>
                    Apply Promo code{isOpen ? " - " : " + "}
                  </Text>
                </View>
              </TouchableOpacity>
            )
            
          }
        </AccordionToggler>
        <AccordionContent>
          <View style={styles.promocodeContainer}>
            <View style={styles.formGroup}>
              <Text style={styles.promoTitle}>Apply Promo</Text>
              <TextInput
                value={this.state.code}
                onChangeText={code => this.setState({code})}
                style={styles.promoText}
              />
            </View>
            <View style={styles.applyButtonContainer}>
              <TouchableOpacity onPress = {() => this.applyDiscount()}>
              <Text>
                  &nbsp;
                </Text>
                <Text style={styles.apply}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </AccordionContent>
      </Accordion>
    )
  }
}


const styles = StyleSheet.create({
  promocodeContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  applyButtonContainer: {
    flexDirection: 'column',
    alignItems : 'center',
    paddingTop: 20
  },
  title: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    fontWeight: 'bold'
  },
  formGroup: {
    flexDirection: 'column'
  },
  promoText: {
    borderWidth: 1
  },
  apply: {
    borderWidth: 1,
    padding: 5
  },
  promoTitle: {
    padding: 10,
    fontSize: 16
  }
});
const mapStateToProps = (state) => {
  const { itemDetails, codeApplied } = state.item;
  return { itemDetails, codeApplied }
};
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    applyDiscount
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(PromoCode)

