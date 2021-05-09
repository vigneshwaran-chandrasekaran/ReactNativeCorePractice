import React, {useState} from 'react';
import {Platform, Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const DeviceInfoScreen = () => {
	const [androidId, setAndroidId] = useState(null);
	const [apiLevel, setApiLevel] = useState(null);
	const [batteryLevel, setBatteryLevel] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState(null);
	console.log('Platform', Platform);
	console.log('Platform constants', Platform?.constants);

	let brand = DeviceInfo.getBrand();
	let appName = DeviceInfo.getApplicationName();

	DeviceInfo.getBatteryLevel().then(data => {
		// 0.759999
		setBatteryLevel(data);
	});

	DeviceInfo.getAndroidId().then(data => {
		// androidId here
		console.log('androidId', data);
		setAndroidId(data);
	});
	DeviceInfo.getApiLevel().then(data => {
		// iOS: ?
		// Android: 25
		// Windows: ?
		setApiLevel(data);
	});

	DeviceInfo.getPhoneNumber().then(data => {
		setPhoneNumber(data);
		// Android: null return: no permission, empty string: unprogrammed or empty SIM1, e.g. "+15555215558": normal return value
	});

	return (
		<View style={{padding: 20}}>
			<Text>Brand : {brand}</Text>
			<Text>androidId : {androidId}</Text>
			<Text>apiLevel : {apiLevel}</Text>
			<Text>appName : {appName}</Text>
			<Text>batteryLevel : {batteryLevel * 100}</Text>
			<Text>phoneNumber : {phoneNumber}</Text>
		</View>
	);
};

export default DeviceInfoScreen;
