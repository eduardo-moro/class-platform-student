import React from 'react'; 
import { StyleSheet } from 'react-native'; 

export default StyleSheet.create({
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
    input: {
        backgroundColor: "#fff",
        maxWidth: 380,
        height: 42,
        width: "100%",
        marginBottom: 10,
        paddingHorizontal: 12,
        borderRadius: 2,
    },
    button: {
        backgroundColor: "#48f",
        width: '100%',
        height: 32,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 12
    },
    form: {
        maxWidth: 600,
        width: '80%',
    },
    image:{
        height: '32%', 
        width: 200, 
        resizeMode: 'contain',
        position: 'absolute',
        top: '14%',
    },
    error: {
        color: 'red', 
        marginBottom:5
    }
}); 