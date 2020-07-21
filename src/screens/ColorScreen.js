import React, { useState} from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {

	const [colors, setColors] = useState([]);
	// console.log(colors);
	return (
		<View>
			<Button 
  				title="Add Color"
  				onPress={() => {
  					setColors([...colors, randomRGB()])
  				}}
  			/>
  			
			<FlatList
				keyExtractor={item => item}
				data={colors}
				renderItem={({ item }) => {
					return (
							<View style={{ height: 100, width: 100, backgroundColor: item }} />
						);
				}}
			/>
		</View>
	);
};

const randomRGB = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`
};

const styles = StyleSheet.create({});

export default ColorScreen;