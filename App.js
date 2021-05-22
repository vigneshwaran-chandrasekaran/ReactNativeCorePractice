import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SampleForm, SearchBar} from 'components';
import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {
	Avatar,
	Caption,
	Drawer,
	Paragraph,
	Switch,
	Text,
	Title,
	TouchableRipple,
	useTheme,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ContactScreen, HomeScreen} from 'screens';
import styled from 'styled-components';

const Container = styled.View`
	display: flex;
	justify-content: center;
	flex: 1;
	background-color: orange;
`;

const Tab = createBottomTabNavigator();
const DrawerSection = createDrawerNavigator();

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

export function DrawerContent(props) {
	const paperTheme = useTheme();

	function signOut() {
		alert('signOut');
	}

	return (
		<View style={{flex: 1}}>
			<DrawerContentScrollView {...props}>
				<DrawerItemList {...props} />
				<View style={styles.drawerContent}>
					<DrawerItemList {...props} />
					<View style={styles.userInfoSection}>
						<View style={{flexDirection: 'row', marginTop: 15}}>
							<Avatar.Image
								source={{
									uri:
										'https://api.adorable.io/avatars/50/abott@adorable.png',
								}}
								size={50}
							/>
							<View
								style={{
									marginLeft: 15,
									flexDirection: 'column',
								}}>
								<Title style={styles.title}>John Doe</Title>
								<Caption style={styles.caption}>@j_doe</Caption>
							</View>
						</View>

						<View style={styles.row}>
							<View style={styles.section}>
								<Paragraph
									style={[styles.paragraph, styles.caption]}>
									80
								</Paragraph>
								<Caption style={styles.caption}>
									Following
								</Caption>
							</View>
							<View style={styles.section}>
								<Paragraph
									style={[styles.paragraph, styles.caption]}>
									100
								</Paragraph>
								<Caption style={styles.caption}>
									Followers
								</Caption>
							</View>
						</View>
					</View>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginTop: 15,
						}}>
						<Ionicons
							name="home-outline"
							size={24}
							style={{paddingLeft: 20}}
						/>
						<Text style={{fontSize: 18, paddingLeft: 20}}>Two</Text>
					</View>

					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							label="Home"
							onPress={() => {
								props.navigation.navigate('Home');
							}}
						/>
						<DrawerItem
							icon={({color, size}) => (
								<Ionicons
									name="home-outline"
									color={color}
									size={size}
								/>
							)}
							label="Home"
							onPress={() => {
								props.navigation.navigate('Home');
							}}
						/>
						<DrawerItem
							icon={({color, size}) => (
								<Ionicons
									name="account-outline"
									color={color}
									size={size}
								/>
							)}
							label="Home"
							onPress={() => {
								props.navigation.navigate('Home');
							}}
						/>
						<DrawerItem
							icon={({color, size}) => (
								<Ionicons
									name="bookmark-outline"
									color={color}
									size={size}
								/>
							)}
							label="Home"
							onPress={() => {
								props.navigation.navigate('Home');
							}}
						/>
						<DrawerItem
							icon={({color, size}) => (
								<Ionicons
									name="settings-outline"
									color={color}
									size={size}
								/>
							)}
							label="Home"
							onPress={() => {
								props.navigation.navigate('Home');
							}}
						/>
						<DrawerItem
							icon={({color, size}) => (
								<Ionicons
									name="account-check-outline"
									color={color}
									size={size}
								/>
							)}
							label="Home"
							onPress={() => {
								props.navigation.navigate('Home');
							}}
						/>
					</Drawer.Section>
					<Drawer.Section title="Preferences">
						<TouchableRipple
							onPress={() => {
								signOut();
							}}>
							<View style={styles.preference}>
								<Text>Dark Theme</Text>
								<View pointerEvents="none">
									<Switch value={paperTheme.dark} />
								</View>
							</View>
						</TouchableRipple>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem
					icon={({color, size}) => (
						<Ionicons
							name="exit-to-app"
							color={color}
							size={size}
						/>
					)}
					label="Sign Out"
					onPress={() => {
						signOut();
					}}
				/>
			</Drawer.Section>
		</View>
	);
}

const MainTabScreen = () => (
	<View style={{flex: 1}}>
		<SearchBar />
		<Tab.Navigator
			screenOptions={({route}) => ({
				tabBarIcon: ({focused, color, size}) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = focused
							? 'ios-information-circle'
							: 'ios-information-circle-outline';
					} else if (route.name === 'Form') {
						iconName = focused
							? 'ios-information-circle-outline'
							: 'ios-list';
					}

					// You can return any component that you like here!
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
			initialRouteName="Home"
			tabBarOptions={{
				activeTintColor: '#e91e63',
			}}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Contact" component={ContactScreen} />
			<Tab.Screen name="Form" component={SampleForm} />
		</Tab.Navigator>
	</View>
);

export default function App() {
	const [hidden, setHidden] = useState(false);
	const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
	const [statusBarTransition, setStatusBarTransition] = useState(
		TRANSITIONS[0],
	);

	return (
		<NavigationContainer
			style={{margin: 0, padding: 0, flex: 1, backgroundColor: 'pink'}}>
			<Container
				style={
					{
						// marginTop: StatusBar.currentHeight || 0,
					}
				}>
				<StatusBar
					animated={true}
					backgroundColor="#61dafb"
					barStyle={statusBarStyle}
					showHideTransition={statusBarTransition}
					hidden={hidden}
				/>

				<DrawerSection.Navigator
					drawerContent={props => <DrawerContent {...props} />}>
					<DrawerSection.Screen
						name="HomeDrawer"
						component={MainTabScreen}
					/>
					<DrawerSection.Screen name="Form" component={SampleForm} />
				</DrawerSection.Navigator>
			</Container>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: 'bold',
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
	},
	row: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15,
	},
	paragraph: {
		fontWeight: 'bold',
		marginRight: 3,
	},
	drawerSection: {
		marginTop: 15,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: '#f4f4f4',
		borderTopWidth: 1,
	},
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});
