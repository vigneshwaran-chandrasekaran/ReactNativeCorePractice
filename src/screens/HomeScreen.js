import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {Text, View} from 'react-native';

const HomeScreen = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('js');

	return (
		<View style={{flex: 1}}>
			<Text>Home Screen</Text>
			<View
				style={
					{
						// backgroundColor: 'pink',
					}
				}>
				<Text>Select Language</Text>
				<Picker
					enabled={true}
					mode="dialog"
					dropdownIconColor="#ff0000"
					style={{
						backgroundColor: 'pink',
						color: 'black',
						fontSize: '18px',
					}}
					prompt="Please select the language"
					selectedValue={selectedLanguage}
					// itemStyle={{
					// 	color: 'red',
					// }}
					// color="#ff0000"
					onValueChange={(itemValue, itemIndex) => {
						console.log('itemValue', itemValue);
						console.log('itemIndex', itemIndex);
						setSelectedLanguage(itemValue);
					}}>
					<Picker.Item label="Java" value="java" />
					<Picker.Item label="JavaScript" value="js" />
				</Picker>
			</View>
		</View>
	);
};

export default HomeScreen;
