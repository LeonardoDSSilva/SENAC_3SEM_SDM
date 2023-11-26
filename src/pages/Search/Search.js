import React, { useState, useEffect } from 'react';
import { Container, Input, LineHorizontal } from '../../assets/styles/teste';
import { View, TouchableOpacity, Dimensions, Text,  Modal, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Card from '../../components/Card';
import carros from '../../data/carros.json';
import ToggleButton from '../../components/ToggleButton';


function Search() {

	const tipoVeiculo =  [ ... new Set(carros.map(item => item.categoria))];
	const tipoMarca =  [ ... new Set(carros.map(item => item.marca))];

	const [modalVisible, setModalVisible] = useState(false);
	let [veiculosFiltrados, setVeiculosFiltrados] = useState(carros);

	const [marcaVeiculo, setmarcaVeiculo] = useState(null);
	const [categoriaVeiculo, setcategoriaVeiculo] = useState(null);
	const [searchText, setSearchText] = useState("");


	const aplicarFiltros = () => {
		let veiculosFiltrados = carros;
	   
		if (marcaVeiculo) {
			veiculosFiltrados = veiculosFiltrados.filter(item => item.marca === marcaVeiculo);
		}
		
		if(categoriaVeiculo){
			veiculosFiltrados = veiculosFiltrados.filter(item => item.categoria === categoriaVeiculo);
		}
	   
		setVeiculosFiltrados(veiculosFiltrados);
		setModalVisible(false);
	   };

	const limparFiltros = () => {
		setmarcaVeiculo(null);
		setcategoriaVeiculo(null);
		setVeiculosFiltrados(carros);
		setModalVisible(false);
	}

	 veiculosFiltrados = veiculosFiltrados.filter(carros => carros.modelo.toLowerCase().includes(searchText.toLowerCase()));

	return (

		<View style={styles.container}>
		<Input placeholder="Digite aqui..." onChangeText={(text) => setSearchText(text)} value={searchText} />
		<View style={{flexDirection: 'row'}}>
			<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, paddingLeft: 24, paddingRight: 24, borderRadius: 20, marginLeft: 20}} onPress={() => setModalVisible(true)}>
				<View style={{flexDirection: 'row', gap: 5}}>
					<Ionicons name="filter-sharp" size={18} color="#000" />
					<Text style={{color: '#000'}}>FILTAR</Text>
				</View>
			</TouchableOpacity>
		</View>
		<LineHorizontal/>

		<View style={styles.cards}>
			<Card data={veiculosFiltrados} />
		</View>

		<Modal
			animationType="slide"
			visible={modalVisible}
			transparent={true}

		>
			<View style={{flex: 1, justifyContent: 'flex-end'}}>
				<View style={styles.modalView}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: 20}}>
						<Text
							style={styles.modalText}
						>FILTROS</Text>
						<TouchableOpacity style={{backgroundColor: '#99CD85', borderRadius: 50, padding: 10
					}} onPress={() => setModalVisible(false)}>
							<Ionicons name="close" size={15} color="#000" onPress={() => setModalVisible(false)} />
						</TouchableOpacity>
					</View>

					<ScrollView style={{width: '100%'}}>

						<View style={styles.optionsCard}>
							<Text style={styles.subtitle}>Tipo de veículo</Text>
							<View>
								<ToggleButton data={ tipoVeiculo } onSelect={(value) => setcategoriaVeiculo(value)} />
							</View>
						</View>

						<View style={styles.optionsCard}>
							<Text style={styles.subtitle}>Marca</Text>
							<View>
								<ToggleButton data={ tipoMarca } onSelect={(value) => setmarcaVeiculo(value)} />
							</View>
						</View>
					</ScrollView>

					<View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
						<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, paddingLeft: 24, paddingRight: 24, borderRadius: 25, marginLeft: 20}} onPress={() => limparFiltros()}>
							<Text style={{color: '#000'}}>LIMPAR</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, paddingLeft: 24, paddingRight: 24, borderRadius: 25, marginRight: 20}} onPress={() => aplicarFiltros()}>
							<Text style={{color: '#000'}}>APLICAR</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
		</View>
  );
};

export default Search;


const styles = StyleSheet.create({
	container: {
		top: 30,
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFF',
		alignItems: 'center',
		gap: 10,
		width: '100%',
		padding: 4,
		paddingtop: 32
	},
	modalView: {
	
	  backgroundColor: "#F8FFF8",
	  borderRadius: 20,
	  height: 700,
	  bottom: 0,
	  padding: 35,
	  alignItems: "center",
	  shadowColor: "#000",
	  elevation: 5
	},
	modalText: {
	  marginBottom: 15,
	  textAlign: "center",
	  fontSize: 24,
	  fontWeight: 'bold'
	},
	subtitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	optionsCard: {
		backgroundColor: '#F0EEE3',
		flexDirection: 'column',
		gap: 10,
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 15,
		paddingBottom: 15,

		borderRadius: 20,
		marginBottom: 20
	},
	button: {
		backgroundColor: '#99CD85',
		padding: 12,
		paddingLeft: 24,
		paddingRight: 24,
		borderRadius: 20,
		marginLeft: 20
	},
	buttonText: {
		color: '#000'
	},
	cards: {
		flex: 1,
		flexDirection: 'row', 
		justifyContent: 'space-between',
		width: '100%',
		height: 'auto',
		paddingBottom: 30
	}
  });