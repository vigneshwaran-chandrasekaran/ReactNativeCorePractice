import {Formik} from 'formik';
import React from 'react';
import {StatusBar, View} from 'react-native';
import styled from 'styled-components';

const ButtonContainer = styled.TouchableOpacity`
  margin: 10px 0;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor ?? '#4b84f3'};
`;

const ButtonText = styled.Text`
  font-size: 15px;
  color: ${props => props.textColor ?? '#fff'};
  text-align: center;
`;

const AppBtn = props => (
  <ButtonContainer
    onPress={props.onPress}
    backgroundColor={props.backgroundColor}>
    <ButtonText textColor={props.textColor}>{props.title}</ButtonText>
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

      <AppBtn onPress={() => alert('Hi!')} title="Click Me" />
      <AppBtn title="Reset" />

      <Formik
        initialValues={{email: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <AppTextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <AppBtn onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </Container>
  );
}
