import {Picker} from '@react-native-picker/picker';
/**
 * This Picker component is ok component only, don't have any fancy details,
 * 2/5 rating
 */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const HomeScreen = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('js');
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [items, setItems] = useState([
		{label: 'Apple', value: 'apple', disabled: 'disabled'},
		{label: 'Banana', value: 'banana'},
		{label: 'one', value: 'one'},
		{label: 'two', value: 'two'},
		{label: 'three', value: 'three'},
		{label: 'four', value: 'four'},
		{label: 'five', value: 'five'},
	]);

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
						fontSize: 18,
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
				<DropDownPicker
					// searchable={false}
					open={open}
					value={value}
					items={items}
					setValue={setValue}
					setItems={setItems}
					setOpen={setOpen}
					multiple={true}
					min={0}
					max={3}
					style={
						{
							// backgroundColor: 'crimson',
						}
					}
					containerStyle={{
						backgroundColor: 'pink',
						borderColor: 'red',
					}}
					textStyle={{
						fontSize: 15,
					}}
					labelStyle={{
						fontWeight: 'bold',
					}}
					placeholder="Select an item, to choose"
					placeholderStyle={{
						color: 'red',
						fontWeight: 'bold',
						fontSize: 20,
					}}
					mode="BADGE"
				/>
			</View>
		</View>
	);
};

export default HomeScreen;