import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.6; // 60%

export default function Detail({ route, navigation }) {
	const [imgActive, setImgActive] = useState(0);
	onchange = (nativeEvent) => {
		if (nativeEvent) {
			const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
			if (slide !== imgActive) {
				setImgActive(slide);
			}
		}
	}
	const item = route.params ? route.params.item : null;
	return (
		<View>
			<ScrollView
				pagingEnabled
				horizontal
				onScroll={({ nativeEvent }) => onchange(nativeEvent)}
				showsHorizontalScrollIndicator={false}
				style={{ width, height}}>{
					item.images.map((image, index) => (
						<Image
							key={index}
							source={{ uri: image }}
							style={{ width, height, resizeMode: 'cover' }}
						/>
					))
				}</ScrollView>

			<Text>{item.modelo}</Text>

			
		</View>
	);
}
