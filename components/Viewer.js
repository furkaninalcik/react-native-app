import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Image } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Circle from "./Circle"

export default class Viewer extends Component {

  _onPressButton1() {
    Alert.alert('This service is not available!')
  }
  _onPressButton2() {
    Alert.alert('Music record not found!')
  }
  _onPressButton3() {
    Alert.alert('new page should be opened!')
  }

  constructor(props){
    super(props)

  }

  render() {


    let pic = {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHO7VHE5PEwnHZ9OB4a46EWYSfQpJh2cwpp97OQ_gsBaurnc5M9A'
      };
    return (


      <View style = {styles.container0}>

        <View style={styles.container}>

        <Image source={pic} style={[styles.image, {transform: [{translateX: 0}] }]}/>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 10}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 20}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 30}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 40}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
            <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 50}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 60}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 70}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 80}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 90}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 100}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 110}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 120}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
            <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 130}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 140}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 150}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>
          <View style = {[styles.note, {transform: [{translateY: 22},{translateX: 160}] }]} >
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateY: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
              <Circle style={ [styles.symbols, {transform: [{translateX: 10}] }]}/>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton1}
              title="Welcome!"
            />


          </View>

         
        </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  symbols: {
    left: 30,
  },
  note: {
    position: 'absolute',
    left: -10,
  },
  noteSet: {
    position: 'absolute',
    margin: 20,
  },
  image: {
    margin: 10,
    width: 340,
    height: 150,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {

   alignItems: 'center',
  },
  container0: {
   flex: 1,
   position: 'absolute',
    top: 90,

  },
  buttonContainer: {
   position: 'absolute',
    flexDirection: 'row',
    top: 210,
  }
})

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => myscreens);


