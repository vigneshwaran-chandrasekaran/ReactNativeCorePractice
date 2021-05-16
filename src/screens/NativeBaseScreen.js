import {
	Body,
	Button,
	Container,
	Content,
	Footer,
	FooterTab,
	Form,
	Header,
	Icon,
	Left,
	Picker,
	Right,
	Text,
	Title,
} from 'native-base';
// import {	Accordion,	ActionSheet} from 'native-base';
import React, {useEffect, useState} from 'react';

const dataArray = [
	{title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
	{title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
	{title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];

var BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const NativeBaseScreen = () => {
	const [state, setState] = useState();
	const [selected, setSelected] = useState('key1');

	useEffect(() => {
		console.log('state', state);
	}, [state]);

	function onValueChange(data) {
		setSelected(data);
	}

	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={() => alert('hi')}>
						<Icon name="menu" />
					</Button>
				</Left>
				<Body>
					<Title>Header</Title>
				</Body>
				<Right />
			</Header>
			<Content padder>
				<Text>This is Content Section 123</Text>
				<Form>
					<Picker
						note
						mode="dropdown"
						mode="dropdown"
						iosHeader="Select your SIM"
						iosIcon={<Icon name="arrow-down" />}
						style={{width: undefined}}
						selectedValue={selected}
						onValueChange={onValueChange}>
						<Picker.Item label="Wallet" value="key0" />
						<Picker.Item label="ATM Card" value="key1" />
						<Picker.Item label="Debit Card" value="key2" />
						<Picker.Item label="Credit Card" value="key3" />
						<Picker.Item label="Net Banking" value="key4" />
					</Picker>
				</Form>

				{/* <Accordion
					dataArray={dataArray}
					expanded={[]}
					icon="add"
					expandedIcon="remove"
					iconStyle={{color: 'green'}}
					expandedIconStyle={{color: 'red'}}
				/>

				<Button
					onPress={() =>
						ActionSheet.show(
							{
								options: BUTTONS,
								cancelButtonIndex: CANCEL_INDEX,
								destructiveButtonIndex: DESTRUCTIVE_INDEX,
								title: 'Testing ActionSheet',
							},
							buttonIndex => {
								setState({clicked: BUTTONS[buttonIndex]});
							},
						)
					}>
					<Text>Actionsheet</Text>
				</Button> */}
			</Content>
			<Footer>
				<FooterTab>
					<Button full>
						<Text>Footer</Text>
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	);
};

export default NativeBaseScreen;
