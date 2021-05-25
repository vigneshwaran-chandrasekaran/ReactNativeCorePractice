// import tagIcon from 'assets/icons/tags.png';
import dropdown from 'assets/icons/chevronDown.png';
import _ from 'lodash';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
	Button,
	Chip,
	Colors,
	Picker,
	Spacings,
	Text,
	TextField,
	Typography,
	View,
} from 'react-native-ui-lib';

Colors.loadColors({
	pink: '#FF69B4',
	gold: '#FFD700',
	error: '#ff2442',
	success: '#00CD8B',
	text: '#20303C',
});

Typography.loadTypographies({
	h1: {fontSize: 58, fontWeight: '300', lineHeight: 80},
	h2: {fontSize: 46, fontWeight: '300', lineHeight: 64},
});

Spacings.loadSpacings({
	// page: isSmallScreen ? 16 : 20,
});

export const longOptions = [
	{label: 'ABAP1', value: 'ABAP1'},
	{label: 'ABAP2', value: 'ABAP2'},
	{label: 'ABAP3', value: 'ABAP3'},
	{label: 'ABAP4', value: 'ABAP4'},
	{label: 'ABAP5', value: 'ABAP5'},
	{label: 'ActionScript1', value: 'ActionScript1'},
	{label: 'ActionScript2', value: 'ActionScript2'},
	{label: 'ActionScript3', value: 'ActionScript3'},
	{label: 'ActionScript4', value: 'ActionScript4'},
	{label: 'ActionScript5', value: 'ActionScript5'},
	{label: 'Ada1', value: 'Ada1'},
	{label: 'Ada2', value: 'Ada2'},
	{label: 'Ada3', value: 'Ada3'},
	{label: 'Ada4', value: 'Ada4'},
	{label: 'Ada5', value: 'Ada5'},
];

const options = [
	{label: 'JavaScript', value: 'js'},
	{label: 'Java', value: 'java'},
	{label: 'Python', value: 'python'},
	{label: 'C++', value: 'c++', disabled: true},
	{label: 'Perl', value: 'perl'},
];
const filters = [
	{label: 'All', value: 0},
	{label: 'Draft', value: 1},
	{label: 'Published', value: 2},
	{label: 'Scheduled', value: 3},
];

const UiLibScreen = () => {
	const [language, setLanguage] = useState();
	const [languages, setLanguages] = useState([]);
	const [nativePickerValue, setNativePickerValue] = useState('java');

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View flex paddingH-25 paddingT-120>
				<Text h1 gold>
					Hello World
				</Text>
				<Text blue50 text20>
					Welcome
				</Text>
				<TextField text50 placeholder="username" dark10 />
				<TextField
					text50
					placeholder="password"
					secureTextEntry
					dark10
				/>
				<View marginT-100 center>
					<Button text70 white background-orange30 label="Login" />
					<Button link text70 orange30 label="Sign Up" marginT-20 />
				</View>
				<View center>
					<Chip label={'Chip'} />
					<Text style={{color: Colors.error}}>Error Message</Text>
					<Text error>Error Message</Text>
					<Text success>Success Message</Text>
				</View>
				<View flex left>
					<Button label="Button" />
				</View>

				<View flex right>
					<Button label="Button" />
				</View>

				<View flex top padding-30>
					<Button label="Button" />
				</View>

				<View flex bottom padding-50>
					<Button label="Button" />
				</View>

				<View flex center padding-100>
					<Button label="Button" />
				</View>

				<View>
					<Picker
						placeholder="Favorite Language"
						floatingPlaceholder
						value={language}
						enableModalBlur={false}
						onChange={item => setLanguage(item)}
						topBarProps={{title: 'Languages'}}
						style={{color: Colors?.red20}}
						showSearch
						searchPlaceholder={'Search a language'}
						searchStyle={{
							color: Colors?.blue30,
							placeholderTextColor: Colors?.dark50,
						}}
						onSearchChange={value => console.warn('value', value)}>
						{_.map(longOptions, option => (
							<Picker.Item
								key={option.value}
								label={option.label}
								value={option.value}
								disabled={option.disabled}
							/>
						))}
					</Picker>

					<Picker
						marginT-20
						placeholder="Favorite Languages (up to 3)"
						floatingPlaceholder
						value={languages}
						onChange={items => setLanguages(items)}
						mode={Picker.modes.MULTI}
						selectionLimit={3}
						rightIconSource={dropdown}>
						{_.map(options, opt => (
							<Picker.Item
								key={opt.value}
								label={opt.label}
								value={opt.value}
								disabled={opt.disabled}
							/>
						))}
					</Picker>

					<Picker
						title="Native Picker"
						placeholder="Pick a Language"
						useNativePicker
						value={nativePickerValue}
						onChange={e => setNativePickerValue(e)}
						rightIconSource={dropdown}
						containerStyle={{marginTop: 20}}
						wheelPickerProps={{
							style: {width: 200},
							color: Colors.green30,
							labelStyle: {
								fontSize: 32,
								fontFamily: 'sans-serif-condensed-light',
							},
							itemHeight: 55,
						}}
						selectLabelStyle={{color: Colors.green30}}
						cancelLabelStyle={{color: Colors.green30}}>
						{_.map(options, option => (
							<Picker.Item
								key={option.value}
								value={option.value}
								label={option.label}
								disabled={option.disabled}
							/>
						))}
					</Picker>
				</View>
			</View>
		</ScrollView>
	);
};

export default UiLibScreen;
