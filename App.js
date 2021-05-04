import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import styled from 'styled-components';
import { SampleForm } from './src/components';

const Container = styled.View`
	display: flex;
	justify-content: center;
	flex: 1;
	padding: 20px;
`;

export default function App() {
	return (
		<NavigationContainer>
			<Container style={{ marginTop: StatusBar.currentHeight || 0 }}>
				<SampleForm />
			</Container>
		</NavigationContainer>
	);
}
