import React from 'react';
import {ScrollView, Text, View} from 'react-native';

const HomeScreen = () => {
	return (
		<View style={{flex: 1}}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text>Home Screen</Text>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
