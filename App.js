import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Search from './src/pages/Search/Index.js';
import Detalhes from './src/pages/Search/Detail.js';
import Home from './src/pages/Home/Index.js';
import Car from './src/pages/Car/Index.js';
import Account from './src/pages/Account/Index.js';


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
		<Tab.Navigator initialRouteName="Buscar">
		  <Tab.Screen name="Buscar" component={SearchStack} options={{ headerShown: false }}/>
		  <Tab.Screen name="Home" component={Home}  options={{ headerShown: false }} />
		  <Tab.Screen name="Meu Carro" component={Car}  options={{ headerShown: false }} />
		  <Tab.Screen name="Conta" component={Account}  options={{ headerShown: false }} />
		</Tab.Navigator>
	</NavigationContainer>
	
	// <Search/>
	// <Container>
	//   <Title>Open up App.js to start working on your ahhhhpp!</Title>
	//   <StatusBar/>
	// </Container>
  );
}

