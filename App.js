import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import Search from './src/pages/Search/Search.js';
import Detalhes from './src/pages/Search/Detail.js';
import Home from './src/pages/Home/Home.js';
import Car from './src/pages/Car/Car.js';
import Account from './src/pages/Account/Account.js';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function SearchStack(){
	return(
		<Stack.Navigator>
			<Stack.Screen name="Search" component={Search}  options={{ headerShown: false }}/>
			<Stack.Screen name="Detalhes" component={Detalhes}/>
	  </Stack.Navigator>
	);
}


export default function App() {
  return (

	<NavigationContainer>
		<Tab.Navigator 
			initialRouteName="Search"
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#99CD85',
				tabBarInactiveTintColor: '#a8a8a8',
			}}
		  >
			
		  <Tab.Screen name="Buscar" component={SearchStack} 
		  	options={{ 
				headerShown: false,
				tabBarIcon: ({ color, size }) => (
					<Ionicons name="search" size={size} color={color} />
			)}}/>

		  <Tab.Screen name="Meu Carro" component={Car} 
		  	options={{
				headerShown: false,
				tabBarIcon: ({ color, size }) => (
					<Ionicons name="car" size={size} color={color} />
			)}}/>

		  <Tab.Screen name="Conta" component={Account} 
		  	options={{
				headerShown: false,
				tabBarIcon: ({ color, size }) => (
					<Ionicons name="person" size={size} color={color} />
			)}}/>
			 
		</Tab.Navigator>
	</NavigationContainer>
	
  );
}

