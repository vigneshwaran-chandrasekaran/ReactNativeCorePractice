import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Button, StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import styled from 'styled-components';
import {SampleForm} from './src/components';
import {HomeScreen} from './src/screens';

const Container = styled.View`
	display: flex;
	justify-content: center;
	flex: 1;
	padding: 20px;
`;

function NotificationsScreen({navigation}) {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Button
				onPress={() => navigation.navigate('Home')}
				title="Go to Home"
			/>
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	);
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Container style={{marginTop: StatusBar.currentHeight || 0}}>
				{/* <Stack.Navigator>
					<Stack.Screen
						name="Form"
						component={SampleForm}
						options={{title: 'Signup Page'}}
					/>
					<Stack.Screen name="Home" component={HomeScreen} />
				</Stack.Navigator> */}
				<Tab.Navigator>
					<Tab.Screen name="Home" component={HomeScreen} />
					<Tab.Screen name="Form" component={SampleForm} />
				</Tab.Navigator>
				{/* <Drawer.Navigator initialRouteName="Notifications">
					<Drawer.Screen
						name="Notifications"
						component={NotificationsScreen}
					/>

					<Drawer.Screen name="Home" component={HomeScreen} />
					<Drawer.Screen name="Form" component={SampleForm} />
				</Drawer.Navigator> */}
			</Container>
		</NavigationContainer>
	);
}
