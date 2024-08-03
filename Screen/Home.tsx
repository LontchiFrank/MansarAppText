/** @format */

import React from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { dataLink } from "../data";
import { FontAwesome5 } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { StackNavigationProp } from "@react-navigation/stack";

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

const Home: React.FC<Props> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.firstPart}>
				<View style={styles.UserInfo}>
					<Text style={{ fontSize: 42, fontWeight: "700", color: "#121e02" }}>
						Hi, Imran
					</Text>
					<Text style={{ fontSize: 13, fontWeight: "500", color: "#8d9089" }}>
						Currently, you have 2 loans
					</Text>
				</View>
				<View>
					<Image
						src="https://imgsrv2.voi.id/WjEqMKzrXoQQvMyNmpfJrb69U5WO2jgd1eqrHg-lOyA/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNDMxMTEvMjAyMzEyMjkxMzI1LW1haW4uY3JvcHBlZF8xNzAzODM0OTI5LmpwZWc.jpg"
						style={styles.avatar}
					/>
				</View>
			</View>
			<View style={styles.secondPart}>
				<Text style={{ fontSize: 20, fontWeight: "700", color: "#8d9089" }}>
					Current Balance
				</Text>
				<Text style={{ fontSize: 40, fontWeight: "700", color: "#121e02" }}>
					$1,459.20
				</Text>
			</View>
			<View style={styles.thirdPart}>
				<View style={styles.loanAmt}>
					<View style={styles.stepIcon1}>
						<MaterialCommunityIcons name="bank" size={16} color="#121e02" />
					</View>
					<View style={{ display: "flex" }}>
						<Text
							style={{
								textAlign: "left",
								fontSize: 11,
								fontWeight: "500",
								color: "#121e02",
							}}>
							Loans Amount.{" "}
						</Text>
						<Text
							style={{
								textAlign: "left",
								fontSize: 20,
								fontWeight: "600",
								color: "#121e02",
							}}>
							$1,59.20
						</Text>
					</View>
				</View>
				<View style={styles.cashAmt}>
					<View style={styles.stepIcon2}>
						<FontAwesome name="money" size={16} color="#121e02" />
					</View>
					<View style={{ display: "flex" }}>
						<Text
							style={{
								textAlign: "left",
								fontSize: 11,
								fontWeight: "500",
								color: "#121e02",
							}}>
							Yearly Payment{" "}
						</Text>
						<Text
							style={{
								textAlign: "left",
								fontSize: 20,
								fontWeight: "600",
								color: "#121e02",
							}}>
							$1,59.20
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.fourthPart}>
				<View style={styles.UserInfo}>
					<Text style={{ fontSize: 34, fontWeight: "700", color: "#121e02" }}>
						Quick Link
					</Text>
				</View>
				<TouchableOpacity
					style={styles.button}
					// onPress={() => navigation.navigate("Home")}
				>
					<Text style={{ fontSize: 14, color: "#121e02" }}>View All</Text>
				</TouchableOpacity>
			</View>
			<View>
				<ScrollView
					horizontal={true}
					// style={styles.scrollView}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.contentContainer}>
					{dataLink.map((el: any) => (
						<View style={{ flexDirection: "column" }}>
							<View
								style={{
									width: 160,
									height: 210,
									borderRadius: 27,
									marginBottom: 8,
									padding: 15,
									display: "flex",
									borderWidth: 1,
									borderColor: "black",
									backgroundColor: `${el.bg}`,
								}}
								key={el.id}>
								<View
									style={{
										width: 40,
										height: 40,
										padding: 8,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: `${el.color}`,
										borderRadius: 100,
									}}>
									<FontAwesome5 name={el.icon} size={16} color="black" />
								</View>
								<View
									style={{
										paddingVertical: 32,
									}}>
									<Text
										style={{
											fontSize: 18,
											fontWeight: "500",
											textAlign: "left",
										}}>
										{el.title}{" "}
									</Text>
								</View>
								<View style={{ width: "100%", height: "100%" }}>
									<View
										style={{
											display: "flex",
											justifyContent: "flex-end",
											alignItems: "flex-end",
										}}>
										<View
											style={{
												width: 30,
												height: 30,
												padding: 8,
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												backgroundColor: "#1c2e06",
												borderRadius: 100,
											}}>
											<Entypo name="chevron-right" size={14} color="white" />
										</View>
									</View>
								</View>
							</View>
						</View>
					))}
				</ScrollView>
			</View>
			<View style={styles.fourthPart}>
				<View style={styles.UserInfo}>
					<Text style={{ fontSize: 34, fontWeight: "700", color: "#121e02" }}>
						Loan Offer
					</Text>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Loan")}>
					<Text style={{ fontSize: 14, color: "#121e02" }}>View All</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		paddingVertical: 102,
		paddingHorizontal: 20,
	},
	firstPart: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: 25,
	},
	UserInfo: {
		width: "70%",
	},

	avatar: {
		width: 50,
		height: 50,
		padding: 8,
		borderRadius: 100,
	},
	secondPart: {
		width: "100%",
		paddingBottom: 30,
	},
	thirdPart: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		gap: 6,
		paddingBottom: 30,
	},
	loanAmt: {
		width: "50%",
		display: "flex",
		flexDirection: "row",
		padding: 12,
		borderWidth: 1,
		borderColor: "#121e02",
		borderRadius: 20,
		gap: 12,
	},
	cashAmt: {
		width: "50%",
		display: "flex",
		flexDirection: "row",
		padding: 12,
		borderWidth: 1,
		borderColor: "#121e02",
		borderRadius: 20,
		gap: 12,
	},
	stepIcon1: {
		width: 40,
		height: 40,
		padding: 8,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#bed69e",
		borderRadius: 100,
	},
	stepIcon2: {
		width: 40,
		height: 40,
		padding: 8,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#cff6db",
		borderRadius: 100,
	},
	fourthPart: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		backgroundColor: "#fff",
		paddingVertical: 8,
		paddingHorizontal: 10,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "black",
		marginVertical: 10,
		alignItems: "center",
	},
	contentContainer: {
		paddingVertical: 20,
		flexDirection: "row",
		gap: 20,
		justifyContent: "space-evenly",
		backgroundColor: "#fff",
	},
});
