import * as React from 'react';
import { Tooltip as _Tooltip} from 'react-native-elements'
import { Text, StyleSheet } from 'react-native';

export default function Tooltip({content, children}) {
  return (

  <_Tooltip 
      height={60}
      containerStyle={styles.tooltipContainer}
      popover={<Text>{content}</Text>} backgroundColor="#ffffff">
    {children}
  </_Tooltip>
  )
}

const styles = StyleSheet.create({
  tooltipContainer: {
    borderRadius: 0
  }
});