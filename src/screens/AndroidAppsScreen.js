import React, {useEffect, useState} from 'react';
import {
	ActivityIndicator,
	Button,
	Image,
	Linking,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import RNAndroidInstalledApps from 'react-native-android-installed-apps-categories';
import {TabBar} from 'react-native-ui-lib';
import styled from 'styled-components';

const Card = styled.View`
	margin: 5px 10px;
	padding: 10px;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const AppName = styled.Text`
	font-weight: bold;
	font-size: 16px;
`;

const LoadingSection = styled.View`
	padding: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

function AppInfoCard({item}) {
	return (
		<Card>
			<Image
				style={{
					width: 50,
					height: 50,
				}}
				source={{
					uri: `data:image/png;base64,${item?.icon}`,
				}}
			/>
			<View
				style={{
					marginLeft: 10,
					flexShrink: 1,
				}}>
				<AppName>{item?.appName}</AppName>
				{item?.category && item?.category !== 'N/A' && (
					<Text>Category: {item?.category}</Text>
				)}
				{item?.appName !== item?.packageName && (
					<Text>{item?.packageName}</Text>
				)}
				<Text>{new Date(item?.firstInstallTime).toLocaleString()}</Text>
				{/* <Text>
									{new Date(
										item?.lastUpdateTime,
									).toUTCString()}
								</Text> */}
				<Text>Verion: {item?.versionName}</Text>
			</View>
		</Card>
	);
}

const AndroidAppsScreen = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [allApps, setAllApps] = useState([]);
	const [drawerAppsCats, setDrawerAppsCats] = useState([]);
	const [loading, setLoading] = useState(true);

	console.log('Linking', Linking);
	console.log('Linking', Linking.getInitialURL());

	Linking.getInitialURL().then(url => {
		console.log('url', url);
	});

	useEffect(() => {
		RNAndroidInstalledApps.getApps()
			.then(apps => {
				console.log('getApps', apps);
				setAllApps(apps);
			})
			.catch(error => {
				alert(error);
			})
			.finally(() => {
				setLoading(false);
			});

		// RNAndroidInstalledApps.getNonSystemApps()
		// 	.then(apps => {
		// 		console.log('getNonSystemApps', apps);
		// 	})
		// 	.catch(error => {
		// 		alert(error);
		// 	});

		// RNAndroidInstalledApps.getSystemApps()
		// 	.then(apps => {
		// 		console.log('getSystemApps', apps);
		// 	})
		// 	.catch(error => {
		// 		alert(error);
		// 	});

		// RNAndroidInstalledApps.getNonsystemAppsCats()
		// 	.then(apps => {
		// 		console.log('getNonsystemAppsCats', apps);
		// 	})
		// 	.catch(error => {
		// 		alert(error);
		// 	});

		// RNAndroidInstalledApps.getAppDrawerApps()
		// 	.then(apps => {
		// 		console.log('getAppDrawerApps', apps);
		// 	})
		// 	.catch(error => {
		// 		alert(error);
		// 	});

		RNAndroidInstalledApps.getAppDrawerAppsCats()
			.then(apps => {
				console.log('getAppDrawerAppsCats', apps);
				setDrawerAppsCats(apps);
			})
			.catch(error => {
				alert(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	function goToSettings() {
		// Linking.openURL('tel:1234567890');
		// Linking.openURL('geo:37.484847,-122.148386');
		// Linking.openURL('sms:+123456789');
		// Linking.openURL('mailto: support@expo.io');
		Linking.openSettings();
	}

	return (
		<View>
			<TabBar
				style={styles.tabbar}
				selectedIndex={0}
				enableShadow
				onChangeIndex={index => setSelectedIndex(index)}>
				<TabBar.Item label="System Apps" />
				<TabBar.Item label="User Installed Apps" />
			</TabBar>

			<Button
				onPress={goToSettings}
				title="Go to settings"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>

			{loading && (
				<LoadingSection>
					<ActivityIndicator size="large" color="#0000ff" />
					<Text>Getting you app information...</Text>
				</LoadingSection>
			)}

			{selectedIndex === 0 && (
				<ScrollView>
					{allApps?.map((item, i) => (
						<AppInfoCard key={i} item={item} />
					))}
				</ScrollView>
			)}
			{selectedIndex === 1 && (
				<ScrollView>
					{drawerAppsCats?.map((item, i) => (
						<AppInfoCard key={i} item={item} />
					))}
				</ScrollView>
			)}
		</View>
	);
};

export default AndroidAppsScreen;

const styles = StyleSheet.create({
	tabbar: {
		marginVertical: 10,
	},
});
