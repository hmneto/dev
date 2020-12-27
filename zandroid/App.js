import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Axios from 'axios'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>oK!</Text>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => { Axios.get('http://localhost:8080/get').then(data => Alert.alert(JSON.stringify(data.data))) }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
