import React, { useState } from 'react'; 
import { View, Text, TextInput, Image, TouchableHighlight } from 'react-native'; 
import Books from '../../assets/books.png';
import styles from  './styled'; 

export default ( props ) => {

    const [ mail, setMail ] = useState("");
    const [ pass, setPass ] = useState("");
    const [ errorMail, setErrorMail ] = useState(false);
    const [ errorPass, setErrorPass ] = useState(false);
    
    const handleButton = () => {
        let error = 0; 

        if(!mail) {
            setErrorMail(true); 
            error++; 
        }; 

        if(!pass) {
            setErrorPass(true); 
            error++; 
        };

        if(error === 0) {
            props.navigation.reset({
                index:0,
                routes:[{name:'Home'}]
            });
        }; 
    }; 

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={Books} />
            <View style={styles.form}>
                <TextInput onChangeText={setMail} style={styles.input} placeholder={"email"}/>
                {errorMail===true &&
                    <Text style={styles.error}>O email é obrigatório</Text>
                }
                <TextInput onChangeText={setPass} style={styles.input} placeholder={"Password"} secureTextEntry={true} />
                {errorPass===true &&
                    <Text style={styles.error}>A senha é obrigatória</Text>
                }
                <TouchableHighlight underlayColor={"#8cf"} onPress={()=>handleButton()} style={styles.button}>
                    <Text style={{textAlign: 'center', color: "white"}}>login</Text>
                </TouchableHighlight>
            </View>
        </View>
    ); 
}; 

