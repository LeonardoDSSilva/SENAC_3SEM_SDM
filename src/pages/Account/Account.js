import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const user = {
	name: "Pedro",
	email: "pedro@exemplo.com",
	phone: "(11) 99999-9999",

};

export default function Account(){
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Ionicons name="person" size={50} color="#000" style={{marginBottom: 10, backgroundColor : '#99CD85', padding: 10, borderRadius: 50}}/>
				<Text style={styles.title}>{user.name}</Text>
			</View>

			<View style={styles.container1}>
				<TouchableOpacity style={styles.button} onPress={() => alert('Dados')}>
					<Ionicons name="person" size={24} color="#000" />
					<Text style={styles.text}>Meus dados</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={() => alert('CNH')}>
					<Ionicons name="car" size={24} color="#000" />
					<Text style={styles.text}>Minha CNH</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={() => alert('Cartões')}>
					<Ionicons name="card" size={24} color="#000" />
					<Text style={styles.text}>Meus cartões</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={() => alert('Configurações')}>
					<Ionicons name="settings" size={24} color="#000" />
					<Text style={styles.text}>Configurações</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={() => alert('Ajuda')}>
					<Ionicons name="help" size={24} color="#000" />
					<Text style={styles.text}>Ajuda</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={() => alert('Sair')}>
					<Ionicons name="exit" size={24} color="#000" />
					<Text style={styles.text}>Sair</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={() => alert('Excluir conta')}>
					<Ionicons name="trash" size={24} color="#000" />
					<Text style={styles.text}>Excluir conta</Text>
				</TouchableOpacity>

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F8FFF8",
		paddingTop: 60,
		paddingBottom: 40,
	},
	header: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#99CD85",
	},
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000",
	},
	container1: {
		position: "absolute",
		backgroundColor: "#F0EEE3",
		flexDirection: "column",
		gap: 10,
		bottom: 0,
		width: "100%",
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 15,
		paddingBottom: 15,

		borderTopEndRadius: 20,
		borderTopStartRadius: 20,
	},

	button: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#99CD85",
		height: 65,
		width: '95%',
		borderRadius: 25,
		marginLeft: 15,
	},
	text: {
		color: "#000",
		marginLeft: 10,
	},
});