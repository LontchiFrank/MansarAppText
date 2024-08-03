/** @format */

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CheckIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// Define the type for the stack navigation
type RootStackParamList = {
	Welcome: undefined;
	Home: undefined;
	Loan: undefined;
	// SignIn: undefined;
};

// Define the props type for the welcome screen component
type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;
// "Welcome"

type Props = {
	navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			{/* Logo or Image */}
			<View style={styles.logoContatiner}>
				<Image source={require("../assets/logo.jpg")} style={styles.logo} />
			</View>
			<View style={styles.info}>
				{/* Title */}
				<Text style={styles.title}>Unlocking your Pay starts now</Text>

				{/* Description */}
				<Text style={styles.description}>
					In order to access your earnings, we need to set up your account.
				</Text>

				<View style={styles.steps}>
					<View style={styles.rowStep}>
						<View style={styles.stepIcon1}>
							<MaterialCommunityIcons name="bank" size={24} color="black" />
						</View>
						<View style={{ display: "flex", gap: 4, flexDirection: "row" }}>
							<Text
								style={{ textAlign: "left", fontSize: 16, color: "#8d9089" }}>
								1.{" "}
							</Text>
							<Text
								style={{ textAlign: "left", fontSize: 18, color: "#8d9089" }}>
								Provide your bank with debit card and employer details
							</Text>
						</View>
					</View>
					<View style={styles.rowStep}>
						<View style={styles.stepIcon2}>
							<CheckIcons
								name="check-decagram-outline"
								size={24}
								color="black"
							/>
						</View>
						<View style={{ display: "flex", gap: 4, flexDirection: "row" }}>
							<Text
								style={{ textAlign: "left", fontSize: 16, color: "#8d9089" }}>
								2.{" "}
							</Text>
							<Text
								style={{ textAlign: "left", fontSize: 18, color: "#8d9089" }}>
								We'll verify you bank account and employment.
							</Text>
						</View>
					</View>
					<View style={styles.rowStep}>
						<View style={styles.stepIcon3}>
							<FontAwesome6 name="money-bill-wave" size={24} color="black" />
						</View>
						<View style={{ display: "flex", gap: 4, flexDirection: "row" }}>
							<Text
								style={{ textAlign: "left", fontSize: 16, color: "#8d9089" }}>
								3.{" "}
							</Text>
							<Text
								style={{ textAlign: "left", fontSize: 18, color: "#8d9089" }}>
								Get money in your bank.
							</Text>
						</View>
					</View>
				</View>
				<View style={{ marginTop: 64 }}>
					<Text style={{ fontSize: 13, color: "#8d9089" }}>
						Restrictions apply,see Earnin Terms and Services for details{" "}
					</Text>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Home")}>
					<Text style={styles.buttonText}>Continue</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
	},
	logoContatiner: {
		paddingTop: 42,
		width: "100%",
		height: 320,
	},
	logo: {
		width: "100%",
		height: "100%",
		// marginBottom: 30,
	},
	info: {
		padding: 10,
		paddingTop: 18,
		flex: 1,
		alignItems: "center",
	},
	title: {
		fontSize: 34,
		textAlign: "center",
		fontWeight: "semibold",
		marginBottom: 10,
	},
	description: {
		fontSize: 16,
		textAlign: "center",
		color: "#777",
		marginBottom: 30,
		paddingHorizontal: 20,
	},
	steps: {
		width: "100%",
		padding: 18,
		display: "flex",
		flexDirection: "column",
		rowGap: 25,
	},
	rowStep: {
		display: "flex",
		flexDirection: "row",
		gap: 6,
	},
	stepIcon1: {
		width: 50,
		height: 50,
		padding: 8,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#bed69e",
		borderRadius: 100,
	},
	stepIcon2: {
		width: 50,
		height: 50,
		padding: 8,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#d7bba9",
		borderRadius: 100,
	},
	stepIcon3: {
		width: 50,
		height: 50,
		padding: 8,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#acccb8",
		borderRadius: 100,
	},
	button: {
		backgroundColor: "#1c2e06",
		paddingVertical: 15,
		paddingHorizontal: 40,
		borderRadius: 25,
		marginVertical: 10,
		width: "80%",
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
	buttonOutline: {
		backgroundColor: "#ffffff",
		borderWidth: 2,
		borderColor: "#6200EE",
	},
	buttonTextOutline: {
		color: "#6200EE",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default WelcomeScreen;
