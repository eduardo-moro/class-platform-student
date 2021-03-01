import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
} from 'react-native';

import apiConfig from '../../config/api';

import getLoginClient from '../../api/apiAuth/logged'

import AsyncStorage from '@react-native-community/async-storage';
import Books from "../../../assets/books.png";

this.storeData = async function (key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export default (props) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMail, setErrorMail] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const getToken = async () => {
    let data = {
      "email": mail ,
      "password": pass
    }

    const client = await getLoginClient();
    await client
        .post(apiConfig.baseurl + 'login', data)
        .then((response) => {
          console.log(response)

          return response.status === 200;

        })
        .catch((error) => {
          console.log(error)
          return false
        })

  }

  const handleButton = () => {
    let error = 0;
    if (!mail) {
      error = 1;
      setErrorMail("Email required.");
    } else {
      setErrorMail("");
    }

    if (!pass) {
      error = 1;
      setErrorPass("Password required.");
    } else {
      setErrorPass("");
    }



    if (error === 0) {
      this.storeData('mail', mail).then(() => {
        this.storeData('password', pass).then(() => {
          if(getToken()){
            props.navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
          });
          }
        });
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
  container: {
    backgroundColor: '#ecf0f5',
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
    paddingVertical: "8%",
  },
  text: {
    fontSize: 18,
  },
  input: {
    backgroundColor: "#fff",
    height: 42,
    width: "100%",
    marginBottom: 2,
    paddingHorizontal: 22,
    borderRadius: 22,
  },
  button: {
    backgroundColor: "#48f",
    borderRadius: 22,
    width: '48%',
    height: 32,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 12,
  },
  register: {
    backgroundColor: "#ffffff",
    borderRadius: 22,
    width: '48%',
    height: 32,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 12,
  },
  form: {
    maxWidth: 600,
    height: 200,
    width: '80%',
    justifyContent: "space-between"
  },
  image: {
    height: '32%',
    width: 200,
    resizeMode: 'contain',
    position: 'absolute',
    top: '14%',
  },
  error: {
    paddingHorizontal: 22,
    color: 'red',
  },
  actions: {
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row"
  }
});
