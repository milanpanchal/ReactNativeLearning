import React, { useState} from "react";
import { StyleSheet, View, Button, Text } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {


	return (
		<View>
			<Text>{color}</Text>
			<Button 
				title={`Increase ${color}`}
				onPress={() => onIncrease()}
			/>
			<Button 
				title={`Decrease ${color}`}
				onPress={() => onDecrease()} 
			/>
		</View>
	);
};


const styles = StyleSheet.create({});

export default ColorCounter;