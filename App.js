import React, {Component} from 'react';
import {AppRegistry,Text,View, StyleSheet} from 'react-native';

import Component3 from './app/components/component3/Component';
export default class yes extends Component{
render(){
  return(
    <View> 
      <Component2 />
       </View>


  );
}

} AppRegistry.registerComponent('yes',()=>yes);