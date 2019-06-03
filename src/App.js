import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a hybrid app!</Text>
        <Image
          source={{ uri: 'https://clipart.info/images/ccovers/1496184263Heart-Eyes-Emoji-png-transparent-2.png' }}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 24
  }
});
