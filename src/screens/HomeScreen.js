import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
	return (
		<View style={{flex: 1}}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text>Home Screen</Text>
				<Button
					onPress={() => navigation.navigate('DatePickers')}
					title="DatePickers"
				/>
				<Button
					onPress={() => navigation.navigate('Dropdowns')}
					title="Dropdowns"
				/>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
