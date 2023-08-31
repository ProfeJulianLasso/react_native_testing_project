import type {ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
