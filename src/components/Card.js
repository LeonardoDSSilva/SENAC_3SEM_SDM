import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList, Image, Button, TouchableOpacity } from "react-native";


export default function Card({data}) {

	return (

		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<View style={styles.card}>
					<View style={styles.cardImagens}>
						<FlatList
							data={item.images}
							
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							renderItem={({ item }) => (
								<Image
									style={{width: 350, height: 200, borderRadius:10, margin: 10, resizeMode:'contain'}}
									source={{uri: item}}
								/>
							)}/>
					</View>
					<View style={styles.cardHeader}>
						<Text>{item.modelo}</Text>
						<Text>{item.marca}</Text>
					</View>

					<View>
						<View style={{flexDirection: 'row', justifyContent: 'center', width: '100%', gap: 5}}>
							<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, paddingLeft: 24, paddingRight: 24, borderRadius: 25, marginLeft: 20}} onPress={() => alert(item.id)}>
								<Text style={{color: '#000'}}>VER DETALHES</Text>
							</TouchableOpacity>
							<TouchableOpacity style={{backgroundColor: '#99CD85', padding: 12, paddingLeft: 24, paddingRight: 24, borderRadius: 25, marginRight: 20}} onPress={() => alert('Reservado')}>
								<Text style={{color: '#000'}}>RESERVAR</Text>
							</TouchableOpacity>
						</View>
					</View>
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
		padding: 10,
		width: '100%',
		height: 350
		
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	cardSubtitle: {
		fontSize: 12,
	},
	cardBody: {
		marginTop: 10,
	},
	cardText: {
		fontSize: 14,
	},
	cardImagens: {
		width: '100%',
		alignItems: 'center',
	}
});


//https://blog.logrocket.com/create-radio-buttons-react-native/
//https://snack.expo.dev/@hrastnik/carousel?platform=android
//https://dev.to/lloyds-digital/let-s-create-a-carousel-in-react-native-4ae2