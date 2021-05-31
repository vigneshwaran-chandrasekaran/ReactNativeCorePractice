import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import * as rssParser from 'react-native-rss-parser';

const RssFeedScreen = () => {
	useEffect(() => {
		fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
			.then(response => response.text())
			.then(async responseData => {
				const rss = await rssParser.parse(responseData);
				console.log(responseData);
				console.log(rss);
				console.log(rss.title);
				console.log(rss.items.length);
			});
	}, []);
	return (
		<View>
			<Text>RssFeedScreen</Text>
		</View>
	);
};

export default RssFeedScreen;
