import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import carros from '../../data/carros.json';
import { Ionicons } from '@expo/vector-icons';

const myCar = {
	model: carros[0],
	placa: 'ABC-1234',
	dataLocacao: '2023-09-01',
	dataDevolucao: '2023-12-03',
	kmRodados: 854,
	porcentagemBateria: Math.floor(Math.random() * 100),
};


export default function Car() {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{uri: myCar.model.images[0]}}/>
			<Text style={styles.title}>{myCar.model.modelo}</Text>


			<View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
				<TouchableOpacity style={styles.button} onPress={() => alert('Reservado')}>
					<Ionicons name="lock-closed" size={24} color="#000" />
					<Text style={{color: '#000'}}>Trancar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => alert('Reservado')}>
					<Ionicons name="locate" size={24} color="#000" />
					<Text style={{color: '#000'}}>Localizar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => alert('Reservado')}>
					<Ionicons name="battery-full" size={24} color="#000" />
					<Text style={{color: '#000'}}>SOS</Text>
				</TouchableOpacity>

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 20,
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		fontSize: 26,
		fontWeight: 'bold',
		color: '#99CD85',
		position: 'absolute',
		top: 195,
		backgroundColor: '#000000a0',
		width: '100%',
		paddingLeft: 20,
	},
	button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#99CD85',
		height: 100,
		padding: 12,
		paddingLeft: 24,
		paddingRight: 24,
		borderRadius: 25,
		marginLeft: 20,
	},
});