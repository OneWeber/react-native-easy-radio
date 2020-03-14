
# react-native-easy-radio

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


## Usage
```javascript
import RNEasyRadio from 'react-native-easy-radio';

// TODO: What to do with the module?
RNEasyRadio;
```
  