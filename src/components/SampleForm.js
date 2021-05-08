import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {DatePickers, Dropdowns, FormScreen} from '../screens';

// https://blog.logrocket.com/react-native-form-validations-with-formik-and-yup/
// https://github.com/jmkitavi/formik-example/blob/master/CustomInput.js

const Stack = createStackNavigator();

const SampleForm = () => {
	return (
		<Stack.Navigator initialRouteName="FormScreen">
			<Stack.Screen
				name="FormScreen"
				component={FormScreen}
				options={{title: 'FormScreen Page'}}
			/>
			<Stack.Screen name="Dropdowns" component={Dropdowns} />
			<Stack.Screen name="DatePickers" component={DatePickers} />
		</Stack.Navigator>
	);
};

export default SampleForm;
