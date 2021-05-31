import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, TouchableHighlight, View} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const ListScreen = () => {
	const navigation = useNavigation();

	return (
		<View>
			<Button
				onPress={() => navigation.navigate('DatePickers')}
				title="DatePickers"
			/>
			<Button
				onPress={() => navigation.navigate('Dropdowns')}
				title="Dropdowns"
				icon={<Icon name="home" size={15} color="white" />}
			/>
			<Button
				onPress={() => navigation.navigate('DeviceInfo')}
				title="DeviceInfo"
				icon={<Icon name="home" size={15} color="white" />}
			/>

			<TouchableHighlight
				style={{
					backgroundColor: 'gold',
					padding: 20,
				}}
				activeOpacity={0.6}
				underlayColor="#DDDDDD"
				onPress={() => navigation.navigate('Dropdowns')}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Icon name="home" size={15} color="#ccc" />
					<Text> Dropdowns</Text>
				</View>
			</TouchableHighlight>

			<Button
				onPress={() => navigation.navigate('FormScreen')}
				title="FormScreen"
				icon={<Icon name="home" size={15} color="white" />}
			/>

			<Button
				onPress={() => navigation.navigate('NativeBase')}
				title="Native Base"
				icon={<Icon name="home" size={15} color="white" />}
			/>
			<Button
				onPress={() => navigation.navigate('ApiCall')}
				title="Api call"
				icon={<Icon name="home" size={15} color="white" />}
			/>
			<Button
				onPress={() => navigation.navigate('Aathicudi')}
				title="Aathicudi"
			/>
			<Button
				onPress={() => navigation.navigate('AndroidApps')}
				title="Android apps"
			/>
			<Button
				onPress={() => navigation.navigate('RssFeed')}
				title="Rss Feed"
			/>
		</View>
	);
};

export default ListScreen;
