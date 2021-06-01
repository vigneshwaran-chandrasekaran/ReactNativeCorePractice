import React, {useEffect, useState} from 'react';
import {
	Dimensions,
	Linking,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import {WebView} from 'react-native-webview';
import styled from 'styled-components';

const Card = styled.TouchableOpacity`
	margin: 10px;
	padding: 20px;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 10px;
`;

const Title = styled.Text`
	font-weight: bold;
	margin-bottom: 10px;
	padding-bottom: 3px;
	font-size: 14px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	color: #ff5d00;
`;

const Description = styled.Text`
	font-size: 14px;
`;

const RssFeedScreen = () => {
	const [feeds, setFeeds] = useState([]);
	useEffect(() => {
		// http://feeds.feedburner.com/Hindu_Tamil_technology
		// http://www.nasa.gov/rss/dyn/breaking_news.rss
		fetch('http://feeds.feedburner.com/Hindu_Tamil_technology')
			.then(response => response.text())
			.then(async responseData => {
				console.log(responseData);
				const rss = await rssParser.parse(responseData);
				setFeeds(rss?.items);
				console.log(rss);
				console.log(rss.title);
				console.log(rss.items.length);
			});
	}, []);

	function openLink(data) {
		console.log('openLink data', data);
		Linking.openURL(data?.id).catch(err => {
			alert('Failed to open page');
			console.error("Couldn't load page", err);
		});
	}

	return (
		<ScrollView>
			<Text>one is one</Text>
			<View style={styles.container}>
				{/* <WebView source={{uri: 'https://reactnative.dev/'}} /> */}

				<WebView
					source={{
						uri: 'https://www.yahoo.com',
					}}
					startInLoadingState={true}
					scalesPageToFit={true}
					style={{
						height: Dimensions.get('window').height,
						width: Dimensions.get('window').width,
					}}
				/>
				{/* <WebView source={{html: '<p>Here I am</p>'}} />
				<WebView
					source={{html: '<p>Here I am</p>'}}
					scalesPageToFit={true}
				/>
				<WebView
					source={{uri: 'https://infinite.red'}}
					style={{marginTop: 20}}
				/> */}
			</View>

			<Text>two is two</Text>
			<ScrollView>
				{feeds?.map((item, i) => (
					<Card key={i} onPress={() => openLink(item)}>
						<Title>{item?.title}</Title>
						<Description>{item?.description}</Description>
					</Card>
				))}
			</ScrollView>
		</ScrollView>
	);
};

export default RssFeedScreen;

const styles = StyleSheet.create({
	container: {
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		backgroundColor: 'pink',
	},
});
