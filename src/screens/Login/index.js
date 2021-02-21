import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TextInput,Image, TouchableHighlight } from 'react-native'; 
import Books from '../../assets/books.png';

export default ( props ) => {

    const [ mail, setMail ] = useState("");
    const [ pass, setPass ] = useState("");
    const [ errorMail, setErrorMail ] = useState('');
    const [ errorPass, setErrorPass ] = useState('');
    
    

    const handleButton = () => {
        let error = 0
        if(!mail) {
            error = 1
            setErrorMail("O email é obrigatório")
        }

        if(!pass) {
            error = 1
            setErrorPass("A senha é obrigatória")
        }

        if(error == 0) {
            props.navigation.reset({
                index:0,
                routes:[{name:'Home'}]
            });
        }
    }; 

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={Books} />
            <View style={styles.form}>
                <TextInput onChangeText={setMail} style={styles.input} placeholder={"email"}/>
                <Text style={styles.error}>{errorMail}</Text>
                <TextInput onChangeText={setPass} style={styles.input} placeholder={"Password"}/>
                <Text style={styles.error}>{errorPass}</Text>
                <TouchableHighlight underlayColor={"#8cf"} onPress={()=>handleButton()} style={styles.button}>
                    <Text style={{textAlign: 'center', color: "white"}}>login</Text>
                </TouchableHighlight>
            </View>
        </View>
    ); 
}; 

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
    input: {
        backgroundColor: "#fff",
        maxWidth: 380,
        height: 42,
        width: "100%",
        marginBottom: 2,
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
        color: 'red'
    }
}); 