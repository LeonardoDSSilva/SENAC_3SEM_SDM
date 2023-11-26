import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Carousel from './Carousel';

export default function Card({ data }) {

	const navigation = useNavigation();

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<View style={styles.card}>
					<Carousel images={item.images}></Carousel>
					<Pressable onPress={() => navigation.navigate('Detalhes', { item })}>
						<View style={styles.cardHeader}>
							<Text style={styles.cardTitle}>{item.modelo}</Text>
							<View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
								<Text style={styles.cardSubtitle}>{item.marca}</Text>
								<Text style={styles.cardSubtitle}> Autonomia: {item.autonomia}</Text>
							</View>
						</View>

						<View style={styles.cardBody}>
							<View style={styles.cardCusto}>
								<Text style={styles.cardText}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.custo.hora)} por hora</Text>
								<Text style={styles.cardText}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.custo.kwRodado)} por km rodado</Text>
							</View>

							<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Reserva', { item })}>
								<Text style={styles.cardText}>RESERVAR</Text>
							</TouchableOpacity>
						</View>
					</Pressable>
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#F0EEE3',
		borderRadius: 10,
		margin: 5,
		paddingTop: 10,
		width: '100%',
		height: 'auto'
	},
	cardHeader: {
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cardBody: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 10
	},
	cardCusto: {
		backgroundColor: '#99CD85',
		borderRadius: 20,
		flexDirection: 'column',
		justifyContent: 'center',
		gap: 5,
		padding: 10,
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	cardSubtitle: {
		fontSize: 12,
	},
	cardText: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#000',
	},
	cardImagens: {
		width: '100%',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#99CD85',
		fontWeight: 'bold',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		paddingLeft: 24,
		paddingRight: 24,
		borderRadius: 20,
		marginRight: 20
	},
});


//https://blog.logrocket.com/create-radio-buttons-react-native/
//https://snack.expo.dev/@hrastnik/carousel?platform=android
//https://dev.to/lloyds-digital/let-s-create-a-carousel-in-react-native-4ae2