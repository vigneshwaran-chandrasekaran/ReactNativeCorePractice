import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {
	AathicudiScreen,
	ApiCallScreen,
	DatePickers,
	DeviceInfoScreen,
	Dropdowns,
	FormScreen,
	ListScreen,
	NativeBaseScreen,
} from 'screens';

// https://blog.logrocket.com/react-native-form-validations-with-formik-and-yup/
// https://github.com/jmkitavi/formik-example/blob/master/CustomInput.js

const Stack = createStackNavigator();

const SampleForm = () => {
	return (
		<Stack.Navigator initialRouteName="ListScreen">
			<Stack.Screen name="ListScreen" component={ListScreen} />
			<Stack.Screen
				name="FormScreen"
				component={FormScreen}
				options={{title: 'FormScreen Page'}}
			/>
			<Stack.Screen name="Dropdowns" component={Dropdowns} />
			<Stack.Screen name="DatePickers" component={DatePickers} />
			<Stack.Screen name="DeviceInfo" component={DeviceInfoScreen} />
			<Stack.Screen name="NativeBase" component={NativeBaseScreen} />
			<Stack.Screen name="ApiCall" component={ApiCallScreen} />
			<Stack.Screen name="Aathicudi" component={AathicudiScreen} />
		</Stack.Navigator>
	);
};

export default SampleForm;
