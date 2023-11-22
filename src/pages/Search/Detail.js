import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Carousel from '../../components/Carousel';

export default function Detail({ route, navigation }) {

	const item = route.params ? route.params.item : null;
	return (
		<View>
			<Carousel images={item.images}></Carousel>
			<View style={styles.cardHeader}>
				<Text style={styles.cardTitle}>{item.modelo}</Text>
				<Text style={styles.cardSubtitle}>{item.marca}</Text>
			</View>
				<Text>Detalhes</Text>
			<View style={styles.cardDetails}>
				<Text>Autonomia: {item.autonomia}</Text>
				<Text>Potência: {item.potencia}</Text>
				<Text>Bateria: {item.bateria}</Text>
				<Text>Tempo de recarga: {item.tempoRecarga}</Text>
			</View>
			<Text>Custo</Text>
			<View style={styles.cardCusto}>
				<Text>Por hora: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.custo.hora)}</Text>
				<Text>Por km rodado: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.custo.kwRodado)}</Text>
			</View>
			<View style={{flexDirection: 'row', justifyContent: 'center', width: '100%', gap: 5}}>
				<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, paddingLeft: 24, paddingRight: 24, borderRadius: 20, marginRight: 20}} onPress={() => alert('Reservado')}>
					<Text style={{color: '#000'}}>RESERVAR</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardHeader: {
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cardTitle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	cardSubtitle: {
		fontSize: 16,
		color: '#a8a8a8',
	},
	cardDetails: {
		padding: 10,
	},
	cardCusto: {
		padding: 10,
	},
});
