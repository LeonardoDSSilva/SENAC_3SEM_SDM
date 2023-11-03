import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions, Image, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.6; // 60%

export default function Carousel({images}) {
	const [imgActive, setImgActive] = useState(0);
	onchange = (nativeEvent) => {
		if (nativeEvent) {
			const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
			if (slide !== imgActive) {
				setImgActive(slide);
			}
		}
	}
	return (
		<View style={ styles.container }>
			<ScrollView
				pagingEnabled
				horizontal
				onScroll={({ nativeEvent }) => onchange(nativeEvent)}
				showsHorizontalScrollIndicator={false}
				style={ styles.scroll }>{
					images.map((image, index) => (
						<Image
							key={index}
							source= {{ uri: image }}
							style= { styles.image }
						/>
					))
				}</ScrollView>
			<View style={ styles.paging }>
				{images.map((i, index) => (
					<Text key={index} style={index == imgActive ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { width, height },
	scroll: { width, height  },
	image: { width, height, resizeMode: 'cover' },
	paging: { flexDirection: 'row', position: 'absolute', bottom: 3.5, alignSelf: 'center' },
	pagingText: { fontSize: (width / 50), color: '#888', margin: 3 },
	pagingActiveText: { fontSize: (width / 50), color: '#fff', margin: 3 }
});
