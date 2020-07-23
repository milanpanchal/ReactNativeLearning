import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxScreen = () => {

	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>Box Screen</Text>
		</View>
	);
};


const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 1,
		borderColor: 'black',
		margin: 10,

	},

	textStyle: {
		borderWidth: 1,
		borderColor: 'red',
		marginVertical: 20,
		marginHorizontal: 20,
	}

});

export default BoxScreen;