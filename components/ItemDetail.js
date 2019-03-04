import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import Accordion, {AccordionToggler, AccordionContent} from './Accordion'

function ItemDetail({itemDetails, pricingDetails}) {
  const {subtotal, savings} = pricingDetails;
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
                  {isOpen ? "Hide item details -" : "Show item details +"}
                </Text>
              </View>
            </TouchableOpacity>
          )
          
        }
      </AccordionToggler>
      <AccordionContent>
        <View style={styles.itemDetail}>
          <View style={styles.itemImage}>
            <Image
  style={{
    alignSelf: 'center',
    height: 85,
    width: 85,
    borderRadius: 20
  }}
  source={require('../assets/chair.png')}
  resizeMode="stretch"
/>
          </View>
          <View style={styles.itemContent}>
            <View>
              <Text style={styles.itemTitle}>{itemDetails.itemName}</Text>
            </View>
            <View style={styles.quantityAndPrice}>
              <Text style={styles.actualPrice}>${(subtotal - savings).toFixed(2)}</Text>
              <Text>Qty: 1</Text>
            </View>
            <View>
              <Text style={styles.calculatedPrice}>
                ${subtotal.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </AccordionContent>
    </Accordion>
  )
}


const styles = StyleSheet.create({
  title: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#808080',
    fontWeight: 'bold'
  },
  itemDetail: {
    flexDirection: 'row'
  },
  itemImage: {
    width: '30%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  image: {
    width: 90,
    height: 90
  },
  itemContent: {
    width: '70%',
    padding: 10,
    flexDirection: 'column'
  },
  quantityAndPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actualPrice: {
    fontWeight: 'bold'
  },
  calculatedPrice: {
    textDecorationLine: 'line-through',
    color: '#888'
  }
});

const mapStateToProps = (state) => {
  const { itemDetails, pricingDetails } = state.item;
  return { itemDetails, pricingDetails }
};

export default connect(mapStateToProps)(ItemDetail)