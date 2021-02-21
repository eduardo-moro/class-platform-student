
// import-area:
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// render-area:
export default ( props ) => {  
// state-area: 
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.reset({
                index:0,
                routes:[{name:'Login'}]
            });
        }, 0);
    }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Class platform</Text>
      <ActivityIndicator size='large' color='#48f'/>
    </View>
  );
}

// styled-area:
const styles = StyleSheet.create(
    {
    container:{
        flex:1, 
        justifyContent:'space-around', 
        alignItems:'center', 
        backgroundColor:'#ffffff'
    }, 
    text:{
        fontSize:42, 
        color: "#333",
        fontFamily: 'Aria-classic'
    },

}); 

