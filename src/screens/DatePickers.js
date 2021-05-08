import React, {useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
const [date, setDate] = useState(new Date());

const DatePickers = () => {
	return (
		<View>
			<DatePicker
				date={date}
				onDateChange={setDate}
				textColor="red"
				// androidVariant="nativeAndroid"
			/>
			<DatePicker
				date={date}
				onDateChange={setDate}
				mode="date"
				// androidVariant="nativeAndroid"
			/>
			<DatePicker
				date={date}
				onDateChange={setDate}
				mode="time"
				textColor="blue"
				// androidVariant="nativeAndroid"
			/>
		</View>
	);
};

export default DatePickers;
