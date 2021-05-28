import aathicudi from 'data/aathicudi.json';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';

const Card = styled.View`
	margin: 10px;
	padding: 10px;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 5px;
	/* background-image: linear-gradient(red, yellow); */
	/* background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%); */
`;

const Name = styled.Text`
	font-weight: bold;
`;

const Email = styled.Text`
	color: blue;
`;

function EachWordDetails({data = ''}) {
	console.log('data', data);

	var names = data;
	var nameArr = names.split(',');

	console.log('nameArr', nameArr);

	return (
		<View>
			{nameArr.map(item => (
				<Text>{item.trim()}</Text>
			))}
		</View>
	);
}

const AathicudiScreen = () => {
	console.log('aathicudi', aathicudi);

	let data = aathicudi?.athisudi;

	console.log('data', data);

	return (
		<View>
			<Text>ஆத்தி சூடி</Text>
			<ScrollView>
				{data?.map((item, i) => (
					<Card key={i}>
						<Name>
							{item?.number}. {item?.poem}
						</Name>
						<EachWordDetails data={item?.meaning} />
						{/* <Text>{item?.meaning}</Text> */}
						<Email>{item?.paraphrase}</Email>
						<Text>{item?.translation}</Text>
					</Card>
				))}
			</ScrollView>
		</View>
	);
};

export default AathicudiScreen;

const styles = StyleSheet.create({});
