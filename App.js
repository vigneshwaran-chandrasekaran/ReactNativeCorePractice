import React from 'react';
import {StatusBar, Text} from 'react-native';
import styled from 'styled-components';

const AppBtn = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor ?? 'blue'};
`;

const ButtonText = styled.Text`
  font-size: 15px;
  color: ${props => props.textColor};
  text-align: center;
`;

const CustomButton = props => (
  <ButtonContainer
    onPress={() => alert('Hi!')}
    backgroundColor={props.backgroundColor}>
    <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
  </ButtonContainer>
);

const Title = styled.Text`
  background-color: red;
  color: yellow;
  font-size: 16px;
  text-align: center;
  padding: 20px;
`;

const AppTextInput = styled.TextInput`
  padding: 5px 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  font-size: 16px;
  color: black;
  border-radius: 5px;
`;

const Container = styled.View`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 20px;
`;

export default function App() {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  function handleBtnClick() {
    alert('Button clicked wow');
  }

  return (
    <Container style={{marginTop: StatusBar.currentHeight || 0}}>
      {/* <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Btn onPress={handleBtnClick} title="Learn More" />
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
      */}
      <AppTextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
      />
      <AppTextInput
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Mobile"
        keyboardType="numeric"
      />
      <AppBtn onPress={handleBtnClick}>
        <Text>Submit</Text>
      </AppBtn>
    </Container>
  );
}
