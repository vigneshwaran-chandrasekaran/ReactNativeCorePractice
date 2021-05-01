import React from 'react';
import {Button, Text, View} from 'react-native';
import styled from 'styled-components';

const Btn = styled.Button`
  background-color: green;
  color: yellow;
  font-size: 10px;
`;

const MyBtn = styled.TouchableOpacity`
  background-color: orange;
  color: yellow;
  font-size: 10px;
  text-align: center;
  padding: 10px;
`;

const Title = styled.Text`
  background-color: red;
  color: yellow;
  font-size: 16px;
  text-align: center;
  padding: 20px;
`;

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

      <Btn onPress={handleBtnClick} title="Learn More" />

      <MyBtn onPress={handleBtnClick}>
        <Text>Wow</Text>
      </MyBtn>

      <Button
        onPress={handleBtnClick}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Button
        onPress={handleBtnClick}
        title="Learn More"
        accessibilityLabel="Learn more about this purple button"
      />
      <Title>Vigneshwaran</Title>
    </View>
  );
}
