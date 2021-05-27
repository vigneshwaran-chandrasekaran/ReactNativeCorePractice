import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';

const Card = styled.View`
	margin: 10px;
	padding: 10px;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

const Name = styled.Text`
	font-weight: bold;
`;

const Email = styled.Text`
	color: blue;
`;

const ApiCallScreen = () => {
	const [persons, setPersons] = useState([]);

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
			const data = res.data;
			setPersons(data);
			console.log('persons', data);
		});
	}, []);

	return (
		<View>
			<ScrollView>
				{persons.map((item, i) => (
					<Card key={i}>
						<Name>{item?.name}</Name>
						<Text>{item?.username}</Text>
						<Email>{item?.website}</Email>
						<Text>{item?.email}</Text>
					</Card>
				))}
			</ScrollView>
		</View>
	);
};

export default ApiCallScreen;
