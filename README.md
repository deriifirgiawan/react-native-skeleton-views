# react-native-skeleton-view

This is simple loading skeleton for React Native


## Installation
> Note: This package is required **react-native-linear-gradient**

#### Step 1
Install **react-native-linear-gradient**
Using npm :
```sh
npm install react-native-linear-gradient
```
If you are running a **react-native** version below 0.60:

```bash
react-native link react-native-linear-gradient
```

#### Step 2
```sh
npm install react-native-skeleton-view
```

## Usage

### Simple Usage
```javascript
import SkeletonView from 'react-native-skeleton-view';

// ...

<SkeletonView style={{height: 12, width: 150, marginStart: 16, marginBottom: 8, borderRadius: 120}} />

```

### Full usage

```javascript
import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonView from 'react-native-skeleton-view';

const App = () => {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.Card}>
        <SkeletonView
          style={styles.SkeletonProfile}
          duration={1500}
        />
        <View style={{marginTop: 8}}>
          <SkeletonView
            style={{height: 12, width: 125, marginStart: 16, marginBottom: 8, borderRadius: 120}}
          />
          <SkeletonView
            style={{height: 12, width: 150, marginStart: 16, marginBottom: 8, borderRadius: 120}}
          />
          <SkeletonView
            style={{height: 12, width: 150, marginStart: 16, marginBottom: 8, borderRadius: 100}}
          />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Wrapper: {padding: 16},
  SkeletonProfile: {
    width: 80,
    height: 80,
    borderRadius: 80
  },
  Card: {
    padding: 24,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
```

## Props

| Name | Description | Default |
| -------- | -------- | -------- |
| backgroundColor     | For change background color skeleton     | #E2E9ED     |
highlightColor     | For change highlight color skeleton     | #D9E0E3    |
duration     | For change duration animation skeleton     | 1000    |
style     | For custom style skeleton     | None    |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
