import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SubText = props => (

  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>

);

const styles = StyleSheet.create({

  title: {
    
    fontSize: 16
  }

});

export default SubText;
