import React from 'react';
import {Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const DeviceInfoScreen = () => {
	let brand = DeviceInfo.getBrand();

	return (
		<View>
			<Text>Brand : {brand}</Text>
		</View>
	);
};

export default DeviceInfoScreen;
