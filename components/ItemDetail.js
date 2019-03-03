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
            <Image source={require('../assets/chair.png')} style={styles.image}/>
          </View>
          <View style={styles.itemContent}>
            <View>
              <Text style={styles.itemTitle}>{itemDetails.itemName}</Text>
            </View>
            <View style={styles.quantityAndPrice}>
              <Text style={styles.actualPrice}>${subtotal - savings}</Text>
              <Text>Qty: 1</Text>
            </View>
            <View>
              <Text style={styles.calculatedPrice}>
                ${subtotal}
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
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
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
    width: 75,
    height: 75
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