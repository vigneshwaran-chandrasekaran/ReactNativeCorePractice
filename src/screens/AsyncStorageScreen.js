import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

const AsyncStorageScreen = () => {
	const [text, onChangeText] = React.useState('Useless Text');
	// const [number, onChangeNumber] = React.useState(null);

	useEffect(async () => {
		/**
		 * on page load pre fill already saved data to input
		 */
		getData().then(data => {
			if (data) {
				onChangeText(data);
				console.log('oldData', data);
			}
		});
	}, []);

	async function saveData() {
		let setStringValue;
		try {
			setStringValue = await AsyncStorage.setItem('inputData', text);
		} catch (e) {
			// save error
			console.log('e.', e);
		}
		console.log('Done.');
		console.log('setStringValue.', setStringValue);
	}

	async function getData() {
		let getStringValue = null;
		try {
			getStringValue = await AsyncStorage.getItem('inputData');
		} catch (e) {
			// save error
			console.log('e.', e);
		}
		console.log('Done.');
		console.log('getStringValue.', getStringValue);

		return getStringValue;
	}

	return (
		<View>
			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
			/>
			{/* <TextInput
				style={styles.input}
				onChangeText={onChangeNumber}
				value={number}
				placeholder="useless placeholder"
				keyboardType="numeric"
			/> */}
			<TouchableOpacity
				style={styles.button}
				onPress={saveData}
				title="Save Data"
				color="#841584"
				accessibilityLabel="Learn more about this purple button">
				<Text style={styles.text}>Save Data</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={getData}
				title="Get Data"
				color="#841584"
				accessibilityLabel="Learn more about this purple button">
				<Text style={styles.text}>Get Data</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AsyncStorageScreen;

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
	},
	button: {
		padding: 10,
		margin: 20,
		borderWidth: 1,
		borderColor: 'gold',
		backgroundColor: '#841584',
		textAlign: 'center',
	},
	text: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 14,
	},
});
