import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const name = 'Milan Panchal';

	return (
			<View>
				<Text style={styles.headerStyle}>Getting started with React Native!</Text>
				<Text style={styles2.subHeaderStyle}>My name is {name}</Text>

			</View>
		);
};

const styles = StyleSheet.create({
	headerStyle: {
		fontSize: 45
	}

});

const styles2 = StyleSheet.create({
	subHeaderStyle: {
		fontSize: 20
	}

});

export default ComponentsScreen;