
# react-native-easy-radio

![GitHub set up](https://github.com/OneWeber/react-native-easy-radio/raw/master/img/radio.jpg)


## Getting started

`$ npm install react-native-easy-radio --save`

### Mostly automatic installation

`$ react-native link react-native-easy-radio`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-easy-radio` and add `RNEasyRadio.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNEasyRadio.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.cardview.RNEasyRadioPackage;` to the imports at the top of the file
  - Add `new RNEasyRadioPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-easy-radio'
  	project(':react-native-easy-radio').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-easy-radio/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-easy-radio')
  	```
    
## Show some message
```js
    import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import RNEasyRadio from 'react-native-easy-radio';

export default class EasyRadio extends React.Component{
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
```

## Props

Property | Default | Description
--------- | ------------- | ------------
r_props |  | An array of buttons to display
arrange_style | flexDirection: 'row',justifyContent:'flex-start',alignItems:'center' | The outermost element style of a component
btn_margin | 15 | The spacing between buttons
con_left | 10 | The spacing between the first button and the left when arrayed horizontally
con_right | 10 | The spacing between the first button and the right when arrayed horizontally
btn_type | 'roll' | Button types, including round and non - round
btn_size | 20 | Button size
outside_style | | Custom style of round box
gap | 3 | The size difference between the inner circle and the outer circle
theme | '#14c5ca' | Theme colors
init_index | 0 | The default index
text_style | marginLeft: 5, color: '#333' | Custom styles of text in buttons
is_animate | true | Whether to display click effect
onPress | ()=> { } | Button click event
item_style | | Each button has its own custom style



## Usage
```javascript
import RNEasyRadio from 'react-native-easy-radio';

// TODO: What to do with the module?
RNEasyRadio;
```
  
