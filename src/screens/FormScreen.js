import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'components/atoms';
import CustomInput from 'components/form/CustomInput';
import {Field, Formik} from 'formik';
import React from 'react';
import {Button, View} from 'react-native';
import 'react-native-gesture-handler';
import styled from 'styled-components';
import * as Yup from 'yup';

// https://blog.logrocket.com/react-native-form-validations-with-formik-and-yup/
// https://github.com/jmkitavi/formik-example

const ButtonContainer = styled.TouchableOpacity`
	margin: 10px 0;
	padding: 12px;
	border-radius: 10px;
	background-color: ${props => props.backgroundColor ?? '#4b84f3'};
	opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const ButtonText = styled.Text`
	font-size: 15px;
	color: ${props => props.textColor ?? '#fff'};
	text-align: center;
`;

const AppBtn = ({
	onPress,
	backgroundColor,
	textColor,
	title,
	disabled = false,
	...props
}) => (
	<ButtonContainer
		onPress={onPress}
		backgroundColor={backgroundColor}
		disabled={disabled}
		{...props}>
		<ButtonText textColor={textColor}>{title}</ButtonText>
	</ButtonContainer>
);

const Title = styled.Text`
	background-color: red;
	color: yellow;
	font-size: 16px;
	text-align: center;
	padding: 20px;
`;

const FormError = styled.Text`
	color: red;
	font-size: 12px;
`;

const validationSchema = Yup.object().shape({
	fullName: Yup.string().required().min(2, 'Too short'),
	email: Yup.string().required().email(),
	password: Yup.string().required().min(6, 'Too short'),
});

const FormScreen = () => {
	const [text, onChangeText] = React.useState(null);
	const [number, onChangeNumber] = React.useState(null);
	const navigation = useNavigation();

	function handleBtnClick() {
		alert('Button clicked wow');
	}

	function handleFormSubmit(values) {
		console.log('handleFormSubmit');
		console.log(values);
	}

	return (
		<View style={{padding: 20}}>
			<Formik
				initialValues={{fullName: '', email: '', password: ''}}
				validationSchema={validationSchema}
				onSubmit={handleFormSubmit}>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					touched,
					isValid,
				}) => (
					<View>
						{console.log('touched', touched)}
						{console.log('isValid', isValid)}
						{console.log('values', values)}

						<Field
							component={CustomInput}
							name="fullName"
							placeholder="Full Name"
						/>

						<TextInput
							name="email"
							placeholder="Email Address"
							onChangeText={handleChange('email')}
							onBlur={handleBlur('email')}
							value={values.email}
							keyboardType="email-address"
						/>
						{errors.email && touched.email && (
							<FormError>Email Error</FormError>
						)}
						<TextInput
							name="password"
							placeholder="Password"
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							value={values.password}
							secureTextEntry
						/>
						{errors.password && touched.password && (
							<FormError>Password Error</FormError>
						)}
						<AppBtn
							// disabled={!isValid || values.email === ''}
							onPress={handleSubmit}
							title="Submit"
						/>
					</View>
				)}
			</Formik>
			<Button
				onPress={handleBtnClick}
				title="Learn More"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
			<TextInput
				onChangeText={onChangeText}
				value={text}
				placeholder="Username"
			/>
			<TextInput
				onChangeText={onChangeNumber}
				value={number}
				placeholder="Mobile"
				keyboardType="numeric"
			/>

			<AppBtn onPress={() => alert('Hi!')} title="Click Me" />
		</View>
	);
};

export default FormScreen;
