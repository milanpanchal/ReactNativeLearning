import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
  		<View style={styles.container}>
  			<Text style={styles.text}>Welcome to React Native world!</Text>
  			<Button 
  				onPress={() => props.navigation.navigate('Components')}
  				title="Go to Components Demo"
  			/>
  			
  			<View style={{height:10}} />
  			<TouchableOpacity 
  				style={styles.button}
  				onPress={() => props.navigation.navigate('List')}>
  				<Text>Go to List Demo</Text>
  			</TouchableOpacity>

  			<View style={{height:10}} />
  			<Button 
  				onPress={() => props.navigation.navigate('List')}
  				title="Go to List Demo"
  			/>

  			<View style={{height:10}} />
  			<Button 
  				onPress={() => props.navigation.navigate('Image')}
  				title="Go to Image Screen"
  			/>

  			<View style={{height:10}} />
  			<Button 
  				onPress={() => props.navigation.navigate('Counter')}
  				title="Go to Counter Screen"
  			/>

  			<View style={{height:10}} />
			<Button 
			  	title="Go to Color Screen"
  				onPress={() => props.navigation.navigate('Color')}
  			/>

  			<View style={{height:10}} />
			<Button 
			  	title="Go to Square Screen Demo"
  				onPress={() => props.navigation.navigate('Square')}
  			/>

			<View style={{height:10}} />
  			<Button 
			  	title="Go to Square Screen Demo Using Reducer"
  				onPress={() => props.navigation.navigate('SquareReducer')}
  			/>

			<View style={{height:10}} />
			<Button 
			  	title="Go to Text Screen Demo"
  				onPress={() => props.navigation.navigate('Text')}
  			/>

  			<View style={{height:10}} />
			<Button 
			  	title="Go to Text Box Screen Demo"
  				onPress={() => props.navigation.navigate('Box')}
  			/>

  		</View>
  	);
  
};

const styles = StyleSheet.create({
  container: {
    // flex: 0.2,
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  text: {
    fontSize: 22
  },
  button: {
    backgroundColor: 'green',
    width: '40%',
    height: 40
  }
});

export default HomeScreen;
