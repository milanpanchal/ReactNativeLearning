import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxScreen = () => {

	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textOneStyle}>Box Screen</Text>
			<Text style={styles.textTwoStyle}>Box Screen #1234</Text>
			<Text style={styles.textThreeStyle}>Box Screen #12345678</Text>

		</View>
	);
};


const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 1,
		borderColor: 'black',
		margin: 10,
		height: 200,
		// alignItems: 'flex-start',
		// flexDirection: 'row',
		justifyContent: 'space-between' // 'center', 'space-between', 'space-around', 'flex-start', 'flex-end'

	},

	textStyle: {
		borderWidth: 1,
		borderColor: 'red',
		// marginVertical: 20,
		// marginHorizontal: 20,
	},
	textOneStyle: {
		borderWidth: 1,
		borderColor: 'red',
		// flex: 2
	},
	textTwoStyle: {
		borderWidth: 1,
		borderColor: 'green',
		// flex: 4,
		// alignSelf: 'center'
		position: 'absolute', // 'absolute' , 'relative'( Default)
		fontSize:10


	},
	textThreeStyle: {
		borderWidth: 1,
		borderColor: 'red',
		// flex: 4
		left: 20
	}


});

export default BoxScreen;