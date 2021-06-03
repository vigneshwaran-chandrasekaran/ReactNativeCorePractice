import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
	accelerometer,
	barometer,
	gyroscope,
	magnetometer,
	SensorTypes,
} from 'react-native-sensors';

const Value = ({name, value}) => (
	<View style={styles.valueContainer}>
		<Text style={styles.valueName}>{name}:</Text>
		<Text style={styles.valueValue}>{String(value).substr(0, 8)}</Text>
	</View>
);

const SensorsScreen = () => {
	const [state, setstate] = useState({x: 0, y: 0, z: 0, timestamp: 0});

	useEffect(() => {
		/**
		 * eih
		 */
		// setUpdateIntervalForType(SensorTypes.accelerometer, 15);

		console.log('SensorTypes', SensorTypes);
		const sub = accelerometer.subscribe(({x, y, z, timestamp}) => {
			// console.log({x, y, z, timestamp});
			setstate({...state, x, y, z, timestamp});
		});

		const gyro = gyroscope.subscribe(({x, y, z, timestamp}) =>
			console.log({x, y, z, timestamp}),
		);

		const mag = magnetometer.subscribe(({x, y, z, timestamp}) =>
			console.log({x, y, z, timestamp}),
		);

		const bar = barometer.subscribe(({pressure}) =>
			console.log({pressure}),
		);

		console.log('subscription', sub);
		console.log('gyro', gyro);
		console.log('mag', mag);
		console.log('bar', bar);

		// const combinedStream = combineLatestWith(
		// 	accelerometer,
		// 	magnetometer,
		// 	gyroscope,
		// ).pipe(
		// 	map(([accelerometerValue, magnetometerValue, gyroscopeValue]) => ({
		// 		accelerometer: accelerometerValue,
		// 		magnetometer: magnetometerValue,
		// 		gyroscope: gyroscopeValue,
		// 	})),
		// );

		console.log('combinedStream', combinedStream);

		return () => {
			if (sub) {
				console.log('unsubscribe called');
				sub.stop();
				sub.unsubscribe();
			}
		};
	}, []);

	return (
		<View>
			<Text>SensorsScreen</Text>
			<View style={styles.container}>
				<Text style={styles.headline}>Accelerometer values</Text>
				<Value name="x" value={state.x} />
				<Value name="y" value={state.y} />
				<Value name="z" value={state.z} />
				<Value name="timestamp" value={state.timestamp} />
			</View>
		</View>
	);
};

export default SensorsScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF',
		padding: 20,
	},
	headline: {
		fontSize: 20,
	},
	valueContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10,
	},
	valueValue: {
		fontSize: 16,
	},
	valueName: {
		fontSize: 14,
		fontWeight: 'bold',
		paddingRight: 10,
	},
});
