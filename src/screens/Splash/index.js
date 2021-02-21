import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>class platform</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    }, 
    text:{
        fontSize:42, 
        fontFamily: 'Aria-classic'
    }
}); 

