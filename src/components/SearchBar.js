import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';

const SearchBarContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
	background-color: orange;
`;
const Drawer = createDrawerNavigator();

function NotificationsScreen() {
	const navigation = useNavigation();
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

const SearchBar = () => {
	const navigation = useNavigation();

	function goToNotifications() {
		// navigation.navigate('Notifications');
		// navigation.navigate('Notifications');
		navigation.dispatch(DrawerActions.toggleDrawer());
	}

	return (
		<View>
			<Drawer.Navigator initialRouteName="Notifications">
				<Drawer.Screen
					name="Notifications"
					component={NotificationsScreen}
				/>
			</Drawer.Navigator>

			<SearchBarContainer>
				<Button
					onPress={goToNotifications}
					title="Go to Notifications"
				/>
				<MaterialCommunityIcons name="menu" color={'#000'} size={20} />
				<Text>Menu</Text>
				<MaterialCommunityIcons
					name="account"
					color={'#000'}
					size={20}
				/>
			</SearchBarContainer>
		</View>
	);
};

export default SearchBar;
