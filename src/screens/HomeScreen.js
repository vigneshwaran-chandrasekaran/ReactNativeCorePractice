import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
	return (
		<View style={{flex: 1}}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text>Home Screen 12</Text>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<MaterialCommunityIcons
						name="home"
						color={'#ccc'}
						size={20}
					/>
					<Icon name="ios-person" size={30} color="#4F8EF7" />
				</View>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
