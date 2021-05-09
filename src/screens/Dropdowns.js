import {Picker} from '@react-native-picker/picker';
/**
 * This Picker component is ok component only, don't have any fancy details,
 * 2/5 rating
 */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
/**
 * This ModalDropdown component is ok component only, don't have any fancy details, it below Picker component
 * 1.75/5 rating
 */
import ModalDropdown from 'react-native-modal-dropdown';
import RNPickerSelect from 'react-native-picker-select';
// https://snack.expo.io/@lfkwtz/react-native-picker-select

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingVertical: 12,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		color: 'black',
		paddingRight: 30, // to ensure the text is never behind the icon
	},
	inputAndroid: {
		margin: 5,
		fontSize: 16,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 1,
		borderColor: 'purple',
		borderRadius: 8,
		color: 'red',
		paddingRight: 30, // to ensure the text is never behind the icon
	},
});

const Dropdowns = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('js');
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [language, setLanguage] = useState('');

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
		<View>
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
			<Text>Modal drop down starts</Text>
			<ModalDropdown
				options={['option 1', 'option 2']}
				isFullWidth={true}
				style={{
					backgroundColor: 'pink',
					padding: 15,
					marginVertical: 15,
				}}
				textStyle={{
					color: '#fff',
					fontSize: 18,
				}}
				dropdownTextStyle={{
					color: 'red',
					fontSize: 18,
				}}
			/>
			<Text>Modal drop down ends</Text>
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

			<RNPickerSelect
				placeholder={{
					label: 'Select you favourite language',
					value: 'TypeStript',
					color: '#9EA0A4',
				}}
				useNativeAndroidPickerStyle={false}
				onValueChange={res => {
					console.log('res res res', res);
					setLanguage(res);
				}}
				value={language}
				items={[
					{label: 'JavaScript', value: 'JavaScript'},
					{label: 'TypeStript', value: 'TypeStript'},
					{label: 'Python', value: 'Python'},
					{label: 'Java', value: 'Java'},
					{label: 'C++', value: 'C++'},
					{label: 'C', value: 'C'},
				]}
				textInputProps={{underlineColor: 'yellow'}}
				style={pickerSelectStyles}
			/>
		</View>
	);
};

export default Dropdowns;
