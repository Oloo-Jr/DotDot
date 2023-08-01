import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return (

    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>

  );
};

const styles = StyleSheet.create({
  card:

  {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 2,
    backgroundColor: 'white',
    
    borderRadius: 5,
  
  }

});

export default Card;