/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import RNEasyRadio from 'react-native-easy-radio';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.tabNames = [
      {label:'按钮1', val: 0},
      {label:'按钮2', val: 1},
      {label:'按钮3', val: 2},
    ]
  }
  render(){
    return (
        <SafeAreaView>
          <View style={{marginTop: 20}}>
            <RNEasyRadio
              r_props={this.tabNames}
              onPress={(label, val, index) => {

              }}
            />
          </View>
          <View style={{marginTop: 20}}>
            <RNEasyRadio
                r_props={this.tabNames}
                is_animate={false}
                onPress={(label, val, index) => {

                }}
            />
          </View>
          <View style={{marginTop: 20}}>
            <RNEasyRadio
                r_props={this.tabNames}
                btn_type={'noroll'}
                onPress={(label, val, index) => {

                }}
            />
          </View>
          <View style={{marginTop: 20}}>
            <RNEasyRadio
                r_props={this.tabNames}
                btn_type={'noroll'}
                theme={"blue"}
                onPress={(label, val, index) => {

                }}
            />
          </View>
          <View style={{marginTop: 20}}>
            <RNEasyRadio
                arrange_style={{justifyContent:'flex-start',alignItems:'flex-start'}}
                item_style={{marginTop: 10}}
                con_left={0}
                r_props={this.tabNames}
                theme={"pink"}
                onPress={(label, val, index) => {

                }}
            />
          </View>
        </SafeAreaView>
    )
  }
}

