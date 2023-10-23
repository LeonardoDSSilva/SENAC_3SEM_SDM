import React, {useState} from 'react';
import {View, Text, Pressable,  StyleSheet, ScrollView} from 'react-native';


export default function ToggleButton({data, onSelect }) {
	const [userOption, setUserOption] = useState(null);
	const selectHandler = (value) => {
	  onSelect(value);
	  setUserOption(value);
	};

	return (
		<View style={{flexDirection: 'row', gap: 5}}>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
			{data.map((item) => {
				return (
					<Pressable
						key={item}
						style={
							item === userOption
								? styles.selected
								: styles.unselected
						}
						onPress={() => selectHandler(item)}>
						<Text style={styles.option}> {item}</Text>
					</Pressable>
				);
			})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	selected: {
		backgroundColor: '#99CD85',
		padding: 12,
		borderRadius: 20,
		marginLeft: 20,
	},
	unselected: {
		backgroundColor: '#fff',
		padding: 12,
		borderRadius: 20,
		marginLeft: 20,
	},
	option: {
		color: '#000',
	},
});