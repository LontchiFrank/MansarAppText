/** @format */

import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { loanActivityData } from "../data";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
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

const Loan: React.FC<Props> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.firstPart}>
				<TouchableOpacity onPress={() => navigation.navigate("Home")}>
					<View style={styles.backBtn}>
						<Entypo name="chevron-left" size={20} color="black" />
					</View>
				</TouchableOpacity>
				<Text
					style={{
						fontSize: 26,
						fontWeight: "700",
						color: "#121e02",
						paddingTop: 20,
					}}>
					Loan Activity
				</Text>
			</View>

			<ScrollView horizontal={false}>
				{loanActivityData.map((el: any) => (
					<View style={{ flexDirection: "column", paddingBottom: 15 }}>
						<View
							style={{
								width: "100%",
								height: 210,
								borderRadius: 20,
								marginBottom: 8,
								display: "flex",
								borderWidth: 1,
								borderColor: "black",
								backgroundColor: `${el.bg}`,
							}}
							key={el.id}>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									padding: 20,
									justifyContent: "space-between",
									borderBottomWidth: 1,
									borderBottomColor: "#ddd",
									// paddingTop: 15,
								}}>
								<Text
									style={{
										fontSize: 25,
										fontWeight: "500",
										textAlign: "left",
									}}>
									{el.title}{" "}
								</Text>
								<View
									style={{
										paddingVertical: 8,
										paddingHorizontal: 15,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: `${el.color}`,
										borderRadius: 8,
									}}>
									<Text>{el.status}</Text>
								</View>
							</View>
							<View
								style={{
									paddingTop: 29,
									paddingHorizontal: 20,
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "flex-end",
								}}>
								<View
									style={{
										width: 70,
										height: 70,
										padding: 8,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: `${el.color}`,
										borderRadius: 100,
									}}>
									<FontAwesome5 name="wallet" size={26} color="black" />
								</View>
								<View>
									<Text
										style={{
											fontSize: 23,
											fontWeight: "800",
											color: "#121e02",
										}}>
										{el.amount}{" "}
									</Text>
									<Text style={{ fontSize: 14, color: "#878985" }}>
										Approved {el.date}{" "}
									</Text>
								</View>
							</View>
						</View>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default Loan;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		paddingVertical: 82,
		paddingHorizontal: 20,
	},
	firstPart: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		gap: 8,
		paddingBottom: 20,
	},
	backBtn: {
		width: 60,
		height: 60,
		padding: 8,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		backgroundColor: "#fff",
		borderRadius: 100,
	},
});
