import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const TextScreen = (props) => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  return (
  		<View>
  			<Text style={styles.text}>Enter Name:</Text>
        <TextInput 
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={ (newValue) => setName(newValue)}
        />

        <Text>My Name is {name}</Text>

        <Text style={styles.text}>Enter Password:</Text>

        <TextInput 
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={ (newValue) => setPassword(newValue)}
        />
        { password.length <= 5 ? <Text style={styles.passwordHint}>Password must be longer than 5 characters</Text> : null }
  		</View>
  	);
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
     margin: 15,
  },
  passwordHint: {
     margin: 15,
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
