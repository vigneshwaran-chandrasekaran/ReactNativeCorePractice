import {useNavigation} from '@react-navigation/native';
import CustomInput from 'components/form/CustomInput';
import {Field, Formik} from 'formik';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import 'react-native-gesture-handler';
import {launchCamera} from 'react-native-image-picker';
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
	font-size: 16px;
	text-align: center;
	padding: 5px;
	margin-bottom: 10px;
`;

// password: Yup
// .string()
// .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
// .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
// .matches(/\d/, "Password must have a number")
// .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
// .min(8, ({ min }) => `Passowrd must be at least ${min} characters`)
// .required('Password is required'),

const validationSchema = Yup.object().shape({
	fullName: Yup.string().required().min(2, 'Too short'),
	email: Yup.string().required().email(),
	post: Yup.string()
		.min(20, ({min, value}) => `${min - value.length} characters to go`)
		.required('Blog post is required'),
	password: Yup.string()
		.required()
		.min(6, ({min}) => `Password must be at least ${min} characters`),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password')], 'Passwords do not match')
		.required('Confirm password is required'),
	photo: Yup.object().required('Photo is required'),
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
				initialValues={{
					fullName: '',
					email: '',
					post: '',
					password: '',
					confirmPassword: '',
				}}
				validationSchema={validationSchema}
				onSubmit={handleFormSubmit}>
				{({
					handleSubmit,
					values,
					setFieldValue,
					setFieldTouched,
					errors,
					touched,
				}) => (
					<View>
						<TouchableOpacity
							style={styles.photoButton}
							onPress={() => {
								launchCamera(
									{title: 'Select Photo'},
									response => {
										if (response.uri) {
											setFieldValue('photo', response);
										}
										setFieldTouched('photo', true);
									},
								);
							}}>
							<Text>Add Image</Text>
						</TouchableOpacity>

						{values.photo && (
							<Text>{`...${values.photo.fileName.substr(
								values.photo.fileName.length - 10,
							)}`}</Text>
						)}

						{(errors.photo || touched.photo) && (
							<Text style={{color: 'red', fontSize: 12}}>
								{errors.photo}
							</Text>
						)}

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
							name="post"
							placeholder="Write post..."
							multiline
							numberOfLines={3}
						/>
						<Field
							component={CustomInput}
							name="password"
							placeholder="Password"
							secureTextEntry
						/>

						<Field
							component={CustomInput}
							name="confirmPassword"
							placeholder="Confirm Password"
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

const styles = StyleSheet.create({
	photoButton: {
		backgroundColor: '#c4e0ff',
		elevation: 3,
		width: '100%',
		height: 40,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
});

export default FormScreen;
