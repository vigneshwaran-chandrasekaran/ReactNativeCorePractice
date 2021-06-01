import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

// https://www.npmjs.com/package/react-native-webview
// https://github.com/react-native-webview/react-native-webview/blob/HEAD/docs/Getting-Started.md
// https://github.com/react-native-webview/react-native-webview/blob/HEAD/docs/Reference.md
// https://github.com/react-native-webview/react-native-webview/blob/HEAD/docs/Guide.md

// https://stackoverflow.com/questions/35451139/react-native-webview-not-loading-any-url-react-native-web-view-not-working/49737433
// https://stackoverflow.com/questions/29334984/render-html-in-react-native

// alternative to webview
// https://www.npmjs.com/package/react-native-render-html
const WebViewScreen = () => {
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
		</ScrollView>
	);
};

export default WebViewScreen;

const styles = StyleSheet.create({
	container: {
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		backgroundColor: 'pink',
	},
});
