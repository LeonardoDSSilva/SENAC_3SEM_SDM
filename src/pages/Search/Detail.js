import React from 'react';
import { View, Text } from 'react-native';

export default function Detail({ route, navigation }) {
	const item = route.params ? route.params.item : null;
	return (
		<View>
			<Text>{item?.modelo}</Text>
		</View>
	);
}
