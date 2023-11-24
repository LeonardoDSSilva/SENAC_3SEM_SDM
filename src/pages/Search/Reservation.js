import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";



export default function Reservation({ route, navigation }) {
	const item = route.params ? route.params.item : null;
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Image source={{ uri: item.images[0] }} style={styles.cardImage} />
				<View style={styles.cardHeader}>
					<Text style={styles.cardTitle}>{item.modelo}</Text>
					<Text style={styles.cardSubtitle}>{item.marca}</Text>
				</View>
			</View>

			<View>
				
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F0EEE3',
	},
	card: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#F0EEE3',
		borderRadius: 10,
		margin: 5,
		paddingTop: 10,
		width: '100%',
		height: '100'
	},
	cardHeader: {
		color: '#99CD85',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cardImage: {
		width: 75,
		height: 75,
		borderRadius: 10,
	},
});