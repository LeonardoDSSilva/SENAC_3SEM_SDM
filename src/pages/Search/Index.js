import React, { useState } from 'react';
import { Container, Input } from '../../assets/styles/teste';
import { View, TouchableOpacity, Button, Text,  Modal, StyleSheet, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-vector-icons/FontAwesome';

import { Ionicons } from '@expo/vector-icons';



function Search() {

	const [modalVisible, setModalVisible] = useState(false);
	const [selectedModel, setSelectedModel] = useState(null);

	return (
		<Container>

		<Input placeholder="Digite aqui..."/>
		<View style={{flexDirection: 'row'}}>
			<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, borderRadius: 20, marginLeft: 20}} onPress={() => setModalVisible(true)}>
				<View style={{flexDirection: 'row', gap: 5}}>
					<Ionicons name="filter-sharp" size={18} color="#000" />
					<Text style={{color: '#000'}}>FILTAR</Text>
				</View>
			</TouchableOpacity>
		</View>


		<Modal
			animationType="slide"
			visible={modalVisible}
			transparent={true}
		>
			<View style={{flex: 1, justifyContent: 'flex-end'}}>
				<View style={styles.modalView}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
						<Text>FILTROS</Text>
						<Button title="X" onPress={() => setModalVisible(false)}/>
					</View>

					<ScrollView style={{width: '100%'}}>
						<View style={{flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
							<Text>Qual modelo você procura?</Text>

							<View style={{flexDirection: 'row', gap: 10, padding: 15}}>
	
								<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, borderRadius: 20}} onPress={() => setSelectedModel('luxo')}>
									<Text style={{color: '#000'}}>LUXO</Text>
								</TouchableOpacity>

								<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, borderRadius: 20}} onPress={() => setSelectedModel('basico')}>
									<Text style={{color: '#000'}}>BÁSICO</Text>
								</TouchableOpacity>
							
							</View>
						</View>

						<View style={{flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
							<Text>Qual modelo você procura?</Text>

							<View style={{flexDirection: 'row', gap: 10, padding: 15}}>
	
								<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, borderRadius: 20}}>
									<Text style={{color: '#000'}}>CARRO</Text>
								</TouchableOpacity>

								<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, borderRadius: 20}}>
									<Text style={{color: '#000'}}>MOTO</Text>
								</TouchableOpacity>
							
							</View>
						</View>
						<View style={{flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
							<Text>Qual modelo você procura?</Text>

							<View style={{flexDirection: 'row', gap: 10, padding: 15}}>
	
								<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, borderRadius: 20}}>
									<Text style={{color: '#000'}}>CARRO</Text>
								</TouchableOpacity>

								<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, borderRadius: 20}}>
									<Text style={{color: '#000'}}>MOTO</Text>
								</TouchableOpacity>
							
							</View>
						</View>


					

					</ScrollView>

					<View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
						<Button title="LIMPAR FILTROS"/>
						<Button title="VER RESULTADOS"/>

					</View>
					





				</View>
			</View>
		</Modal>



		

		</Container>
  );
};

export default Search;


const styles = StyleSheet.create({
	modalView: {
	
	  backgroundColor: "#aaf",
	  borderRadius: 20,
	  height: 800,
	  bottom: 0,
	  padding: 35,
	  alignItems: "center",
	  shadowColor: "#000",
	//   shadowOffset: {
	// 	width: 0,
	// 	height: 100
	//   },

	  elevation: 5
	}
  });