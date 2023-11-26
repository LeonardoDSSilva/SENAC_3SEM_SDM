import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import carros from '../../data/carros.json';
import { Ionicons } from '@expo/vector-icons';

const myCar = {
	model: carros[Math.floor(Math.random() * carros.length)],
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
				<TouchableOpacity style={styles.button} onPress={() => alert('Trancado')}>
					<Ionicons name="lock-closed" size={24} color="#000" />
					<Text style={{color: '#000'}}>Trancar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => alert('Localizado')}>
					<Ionicons name="locate" size={24} color="#000" />
					<Text style={{color: '#000'}}>Localizar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => alert('SOS')}>
					<Ionicons name="battery-full" size={24} color="#000" />
					<Text style={{color: '#000'}}>SOS</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.container1}>
				<Text style={styles.secTitle}>Informações do veículo</Text>
				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<Text style={styles.secText}>Placa: {myCar.placa}</Text>
					<Text style={styles.secText}>Autonomia: {myCar.model.autonomia}</Text>
				</View>
			</View>

			<View style={styles.container1}>
				<Text style={styles.secTitle}>Porcentagem da bateria</Text>
				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<Text style={styles.secText}>Km restantes: {myCar.model.autonomia.replace('km', '')* myCar.porcentagemBateria / 100}</Text>
					<Text style={styles.secText}>Autonomia: {myCar.porcentagemBateria}%</Text>
				</View>
				<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, paddingLeft: 24, paddingRight: 24, borderRadius: 20, marginRight: 20}} onPress={() => alert('Recarga')}>
					<Text style={{color: '#000'}}>PONTOS DE RECARGA</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.container1}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<Text style={styles.secTitle}>Informações da locação</Text>
					<Text style={styles.secText}>Dias restantes: {Math.floor((new Date(myCar.dataDevolucao) - new Date()) / (1000 * 60 * 60 * 24))}</Text>
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<Text style={styles.secText}>Locação: {myCar.dataLocacao}</Text>
					<Text style={styles.secText}>Devolução: {myCar.dataDevolucao}</Text>
				</View>
				<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, paddingLeft: 24, paddingRight: 24, borderRadius: 20, marginRight: 20}} onPress={() => alert('Extensão')}>
					<Text style={{color: '#000'}}>EXTENDER</Text>
				</TouchableOpacity>
{/* 				<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, paddingLeft: 24, paddingRight: 24, borderRadius: 20, marginRight: 20}} onPress={() => alert('Reservado')}>
					<Text style={{color: '#000'}}>DEVOLVER</Text>
				</TouchableOpacity> */}
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 20,
		gap: 15
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
		width: 105,
		paddingLeft: 24,
		paddingRight: 24,
		borderRadius: 25,
		marginLeft: 15,
	},
	container1: {
		backgroundColor: '#F0EEE3',
		flexDirection: 'column',
		gap: 10,

		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 15,
		paddingBottom: 15,

		borderRadius: 20,

	},
});