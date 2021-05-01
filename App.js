import React from 'react';
import {Button, Text, View} from 'react-native';

export default function App() {
  function handleBtnClick() {
    alert('Button clicked wow');
  }

  return (
    <View>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>

      <Button
        onPress={handleBtnClick}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
