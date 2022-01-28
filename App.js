import React, { Component } from 'react';
//Need to add  Image component in react native
import {  View, Text, Image, StyleSheet } from 'react-native'


export default class App extends Component {
  render() {
    return (
      <View style={styles.Container}>
      <Text style={{fontSize:20,fontWeight:"bold",color:"red",margin:40}}>Add Image /Image uri</Text>
        <Image                                                  //Image Stored inside Assets folder
          style={{ width: 100, height: 100, marginBottom: 15 }}
          source={require('./assets/flower.jpg')}
        />

        <Image 
          style={{ width: 100, height: 100 }}                 //Image Link has been used
          source={{uri: 'https://www.positronx.io/wp-content/uploads/2020/02/react-native-150x150-1.jpg'}}
        />

       
      </View>
    );
  }
};

const styles = StyleSheet.create({

    Container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"pink"
    }

});
