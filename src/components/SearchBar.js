import { DrawerActions, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';

const SearchBarContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
	background-color: orange;
`;

const SearchBar = () => {
	const navigation = useNavigation();
	const route = useRoute();

	function goToNotifications() {
		navigation.dispatch(DrawerActions.toggleDrawer());
	}

	return (
		<View>
			<SearchBarContainer>
				{/* <Button
					onPress={goToNotifications}
					title="Go to Notifications"
				/> */}
				<MaterialCommunityIcons
					name="menu"
					color={'#000'}
					size={20}
					onPress={goToNotifications}
				/>
				<Text>Page Title {route.name}</Text>
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
