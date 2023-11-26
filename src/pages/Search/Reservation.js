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
{/* 				<View style={styles.cardCusto}>
					<Text style={styles.cardText}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.custo.hora)} por hora</Text>
					<Text style={styles.cardText}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.custo.kwRodado)} por km rodado</Text>
				</View> */}
			</View>

			<View>
				<Text>Reserva</Text>

				<View>
					<Text>Período</Text>
					<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
						<Text>Data de início</Text>
						<Text>Data de fim</Text>
					</View>
				</View>
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
		flexDirection: 'row',
		backgroundColor: '#99CD85',
		borderRadius: 10,
		margin: 5,
		padding: 10,
		width: '100%',
		height: 100
	},
	cardHeader: {
		flex: 1,
		color: '#99CD85',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cardImage: {
		padding: 15,
		width: 75,
		height: 75,
		borderRadius: 10,
	},
	cardTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#000',
	},
	cardSubtitle: {
		fontSize: 16,
		color: '#000',
	},
	
});