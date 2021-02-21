import React from 'react'; 
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'; 


export default ( props ) => {
    
    const handleButton = () => {
        props.navigation.reset({
            index:0,
            routes:[{name:'Login'}]
        });
    }; 

    return(
        <View style={styles.container}>
            <TouchableHighlight underlayColor={"#8cf"} onPress={()=>handleButton()} style={styles.button}>
                <Text style={{textAlign: 'center', color: "white"}}>log out</Text>
            </TouchableHighlight>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#ecf0f5",
        flex:1, 
        justifyContent:'flex-end', 
        alignItems:'center',
        paddingVertical: "8%",
    }, 
    text:{
        fontSize:18, 
    },
    button: {
        backgroundColor: "#48f",
        width: '20%',
        height: 32,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'
    },
})