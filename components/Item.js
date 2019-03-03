import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Item({children}) {
  return (
    <View style={styles.item}>
      <View style={styles.leftItem}>
        {children[0]}
      </View>
      <View style={styles.rightItem}>
        {children[1] && children[1]}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftItem: {
    width: '50%',
    justifyContent: 'flex-start'
  },
  rightItem: {
    width: '50%',
    justifyContent: 'flex-end'
  }
});