import aathicudi from 'data/aathicudi.json';
import React from 'react';
import {Animated, Dimensions, StatusBar, Text, View} from 'react-native';
import styled from 'styled-components';

const {width, height} = Dimensions.get('screen');

console.log('width', width);
console.log('height', height);

const Card = styled.View`
	margin: 10px;
	padding: 20px;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 10px;
`;

const Name = styled.Text`
	font-weight: bold;
	margin-bottom: 15px;
	font-size: 16px;
`;

const Title = styled.Text`
	margin-bottom: 5px;
	padding-bottom: 3px;
	font-size: 12px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	color: #ff5d00;
`;

function EachWordDetails({data = ''}) {
	const names = data;
	const nameArr = names.split(',');

	return (
		<View>
			<StatusBar hidden />
			<Title>பதவுரை</Title>
			<View style={{marginBottom: 15}}>
				{nameArr.map((item, i) => (
					<Text key={i}>{item.trim()}</Text>
				))}
			</View>
		</View>
	);
}

function TamilTranslation({data = ''}) {
	return (
		<View style={{marginBottom: 15}}>
			<Title>பொழிப்புரை</Title>
			<Text>{data}</Text>
		</View>
	);
}

function EnglishTranslation({data = ''}) {
	return (
		<View>
			<Title>English Translation</Title>
			<Text>{data}</Text>
		</View>
	);
}

const ITEM_SIZE = 20;

const AathicudiScreen = () => {
	const scrollY = React.useRef(new Animated.Value(0)).current;
	return (
		<View style={{flex: 1, backgroundColor: '#fff'}}>
			{/* <Text>ஆத்தி சூடி</Text> */}
			{/* <ScrollView>
				{aathicudi?.athisudi?.map((item, i) => (
					<Card key={i}>
						<Name>
							{item?.number}. {item?.poem}
						</Name>
						<EachWordDetails data={item?.meaning} />
						<TamilTranslation data={item?.paraphrase} />
						<EnglishTranslation data={item?.translation} />
					</Card>
				))}
			</ScrollView> */}
			<Animated.FlatList
				data={aathicudi?.athisudi}
				onScroll={Animated.event(
					[{nativeEvent: {contentOffset: {y: scrollY}}}],
					{useNativeDriver: true},
				)}
				keyExtractor={item => item?.number}
				contentContainerStyle={{
					padding: 20,
					paddingTop: StatusBar.currentHeight,
				}}
				renderItem={({item, index}) => {
					const inputRange = [
						-1,
						0,
						ITEM_SIZE * index,
						ITEM_SIZE * (index + 2),
					];
					const scale = scrollY.interpolate({
						inputRange,
						outputRange: [1, 1, 1, 0],
					});
					return (
						<Animated.View
							key={item?.number}
							style={{
								borderColor: 'red',
								borderWidth: 1,
								shadowColor: '#000',
								shadowOffset: {
									width: 4,
									height: 4,
								},
								shadowOpacity: 1,
								shadowRadius: 20,
								// transform: [{scale}],
							}}>
							<Card key={item?.number}>
								<Name>
									{console.log('item?.number', item)}
									{item?.number}. {item?.poem}
								</Name>
								<EachWordDetails data={item?.meaning} />
								<TamilTranslation data={item?.paraphrase} />
								<EnglishTranslation data={item?.translation} />
							</Card>
						</Animated.View>
					);
				}}
			/>
		</View>
	);
};

export default AathicudiScreen;
