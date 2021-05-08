import {Formik} from 'formik';
import React from 'react';
import {Button, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import styled from 'styled-components';
import * as Yup from 'yup';

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

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email(),
	password: Yup.string().required().min(6, 'Too short'),
});

const FormScreen = ({navigation}) => {
	const [text, onChangeText] = React.useState(null);
	const [number, onChangeNumber] = React.useState(null);

	function handleBtnClick() {
		alert('Button clicked wow');
	}

	function handleFormSubmit(values) {
		console.log('handleFormSubmit');
		console.log(values);
	}

	return (
		<View>
			{/* <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>function
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

			<Button title="DatePickers"></Button>

			<Text>one and two</Text>

			<Button
				onPress={() => navigation.navigate('DatePickers')}
				title="DatePickers"
			/>

			<Formik
				initialValues={{email: '', password: ''}}
				validationSchema={validationSchema}
				onSubmit={handleFormSubmit}>
				{({handleChange, handleBlur, handleSubmit, values, errors}) => (
					<View>
						<AppTextInput
							onChangeText={handleChange('email')}
							onBlur={handleBlur('email')}
							placeholder="Email"
							value={values.email}
						/>
						{errors.email && <Text>Email Error</Text>}
						<AppTextInput
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							placeholder="Password"
							value={values.password}
						/>
						{errors.password && <Text>Password Error</Text>}
						<AppBtn onPress={handleSubmit} title="Submit" />
					</View>
				)}
			</Formik>
		</View>
	);
};

export default FormScreen;
