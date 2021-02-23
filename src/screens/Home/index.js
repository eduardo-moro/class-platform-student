import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default ({ navigation }) => {
  const [mail, setMail] = useState("");
  const handleButton = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const retrieveData = async (key, value) => {
    try {
      value = await AsyncStorage.getItem("mail");
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log(error);
    }
  };

  retrieveData().then((data) => setMail(data));

  return (
    <View style={styles.container}>
      <Text>olá {mail}</Text>
      <TouchableHighlight
        underlayColor={'#8cf'}
        onPress={() => handleButton()}
        style={styles.button}
      >
        <Text style={{ textAlign: "center", color: 'white' }}>log out</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f5",
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: "8%",
  },
  text: {
    fontSize: 18,
  },
  button: {
    backgroundColor: "#48f",
    width: '20%',
    height: 32,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
