import {useNavigation} from '@react-navigation/native';
import CustomInput from 'components/form/CustomInput';
import {Field, Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
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
	background-color: white;
	color: blue;
	font-size: 24px;
	text-align: center;
	padding: 10px;
`;

const validationSchema = Yup.object().shape({
	fullName: Yup.string().required().min(2, 'Too short'),
	email: Yup.string().required().email(),
	password: Yup.string().required().min(6, 'Too short'),
});

const FormScreen = () => {
	const navigation = useNavigation();

	function handleFormSubmit(values) {
		console.log('handleFormSubmit');
		console.log(values);
	}

	return (
		<View style={{padding: 20}}>
			<Title>Login Form</Title>
			<Formik
				initialValues={{fullName: '', email: '', password: ''}}
				validationSchema={validationSchema}
				onSubmit={handleFormSubmit}>
				{({handleSubmit}) => (
					<View>
						<Field
							component={CustomInput}
							name="fullName"
							placeholder="Full Name"
						/>
						<Field
							component={CustomInput}
							name="email"
							placeholder="Email Address"
							keyboardType="email-address"
						/>
						<Field
							component={CustomInput}
							name="password"
							placeholder="Password"
							secureTextEntry
						/>
						<AppBtn
							// disabled={!isValid || values.email === ''}
							onPress={handleSubmit}
							title="Submit"
						/>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default FormScreen;
