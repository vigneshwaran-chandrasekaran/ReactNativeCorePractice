import dropdown from 'assets/icons/chevronDown.png';
import tagIcon from 'assets/icons/tags.png';
import _ from 'lodash';
import React, {useState} from 'react';
import {Image, ScrollView} from 'react-native';
import {
	Assets,
	Avatar,
	Button,
	Chip,
	Colors,
	Dialog,
	PanningProvider,
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
	// page: isSmallScden ? 16 : 20,
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

const contactsData = [
	{
		name: 'rallylongmailname@wix.com',
		text: 'Made a purchase in the total of 7.00$',
		timestamp: '7/14/2016',
		thumbnail:
			'https://static.wixstatic.com/media/87994e3d0dda4479a7f4d8c803e1323e.jpg/v1/fit/w_750,h_750/87994e3d0dda4479a7f4d8c803e1323e.jpg',
		leftTitleBadge: 'badgeOfficial',
	},
	{
		name: 'Arnold Schwarzenegger',
		text: 'Get to the chopper',
		timestamp: 'Jul 19th 214',
	},
	{
		name: 'Johnny Gibson',
		text: 'Do you also carry these shoes in black?',
		timestamp: '36 min',
		count: '5',
		thumbnail:
			'https://static.wixstatic.com/media/87994e3d0dda4479a7f4d8c803e1323e.jpg/v1/fit/w_750,h_750/87994e3d0dda4479a7f4d8c803e1323e.jpg',
		isNew: false,
	},
	{
		name: 'Jennifer Clark',
		text: 'This might be the subject\nAnd the content is on a new line',
		timestamp: '2 hours',
		count: '1',
		thumbnail:
			'https://static.wixstatic.com/media/c1ca83a468ae4c998fe4fddea60ea84d.jpg/v1/fit/w_750,h_750/c1ca83a468ae4c998fe4fddea60ea84d.jpg',
		isNew: true,
	},
];

const contacts = _.map(contactsData, c => ({
	...c,
	value: c.name,
	label: c.name,
}));

const dialogHeader = props => {
	const {title} = props;
	return (
		<Text margin-15 text60>
			{title}
		</Text>
	);
};

const renderDialog = modalProps => {
	const {visible, children, toggleModal, onDone} = modalProps;

	return (
		<Dialog
			migrate
			visible={visible}
			onDismiss={() => {
				onDone();
				toggleModal(false);
			}}
			width="100%"
			height="45%"
			bottom
			useSafeArea
			containerStyle={{backgroundColor: Colors.white}}
			renderPannableHeader={dialogHeader}
			panDirection={PanningProvider.Directions.DOWN}
			pannableHeaderProps={{title: 'Custom modal'}}>
			<ScrollView>{children}</ScrollView>
		</Dialog>
	);
};

const UiLibScreen = () => {
	const [language, setLanguage] = useState();
	const [language2, setLanguage2] = useState(options[2].value);
	const [languages, setLanguages] = useState([]);
	const [nativePickerValue, setNativePickerValue] = useState('java');
	const [filter, setFilter] = useState(filters[0]);
	const [contact, setContact] = useState(contacts[0]);
	const [customModalValues, setCustomModalValues] = useState([]);

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
						useNativePicker={true}
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

					<Picker
						marginT-20
						title="Custom modal"
						placeholder="Pick multiple Languages"
						value={customModalValues}
						onChange={e => setCustomModalValues(e)}
						// mode={Picker.modes.MULTI}
						rightIconSource={dropdown}
						renderCustomModal={renderDialog}>
						{_.map(options, option => (
							<Picker.Item
								key={option.value}
								value={option}
								label={option.label}
								disabled={option.disabled}
							/>
						))}
					</Picker>

					<View marginB-30>
						<Text marginT-20 marginB-10 text70 dark60>
							Custom Picker:
						</Text>
						<Picker
							value={filter}
							onChange={e => setFilter(e)}
							renderPicker={({label}) => {
								return (
									<View row center>
										<Image
											style={{
												marginRight: 1,
												height: 16,
												resizeMode: 'contain',
											}}
											source={tagIcon}
										/>
										<Text dark10 text80>
											{label} Posts
										</Text>
									</View>
								);
							}}>
							{_.map(filters, objFilter => (
								<Picker.Item
									key={objFilter.value}
									value={objFilter.value}
									label={objFilter.label}
								/>
							))}
						</Picker>
					</View>

					<View marginB-30>
						<Text marginT-20 marginB-10 text70 dark60>
							Custom Picker Items:
						</Text>
						<Picker
							value={contact}
							onChange={e => setContact(e)}
							getItemValue={e => e.name}
							renderPicker={e => {
								return (
									<View row center>
										<Avatar
											size={30}
											source={{uri: e.thumbnail}}
										/>
										<Text text70 marginL-10>
											{e.name}
										</Text>
									</View>
								);
							}}>
							{_.map(contacts, e => (
								<Picker.Item
									key={e.name}
									value={e}
									renderItem={(item, props) => (
										<View
											style={{
												height: 56,
												borderBottomWidth: 1,
												borderColor: Colors.dark80,
											}}
											paddingH-15
											row
											centerV
											spread>
											<View row centerV>
												<Avatar
													size={35}
													source={{
														uri: item.thumbnail,
													}}
												/>
												<Text marginL-10 text70 dark10>
													{item.name}
												</Text>
											</View>
											{props.isSelected && (
												<Image
													source={Assets.icons.check}
												/>
											)}
										</View>
									)}
									getItemLabel={item => item.name}
								/>
							))}
						</Picker>
					</View>

					<View>
						<Text text60 marginT-s5 marginB-s2>
							Migrated Picker
						</Text>

						<Picker
							migrate
							title="Language"
							placeholder="Favorite Language"
							value={language2}
							onChange={e => setLanguage2(e)}
							topBarProps={{title: 'Languages'}}
							showSearch
							searchPlaceholder={'Search a language'}
							searchStyle={{
								color: Colors.blue30,
								placeholderTextColor: Colors.dark50,
							}}
							// mode={Picker.modes.MULTI}
							// useNativePicker
						>
							{_.map(options, e => (
								<Picker.Item
									key={e.value}
									value={e.value}
									label={e.label}
									disabled={e.disabled}
								/>
							))}
						</Picker>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default UiLibScreen;
