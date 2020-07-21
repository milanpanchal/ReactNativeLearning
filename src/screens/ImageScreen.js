import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = (props) => {
  return (
        <View>

          <ImageDetail 
            title="Mountain"
            imageScore="9"
            imageSource = {require('../../assets/mountain.jpg')} />
          
          <ImageDetail 
            title="Beach"
            imageScore="6"
            imageSource = {require('../../assets/beach.jpg')} />
          
          <ImageDetail 
            title="Forest"
            imageScore="3"
            imageSource = {require('../../assets/forest.jpg')} />

        </View>
  	);
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default ImageScreen;
