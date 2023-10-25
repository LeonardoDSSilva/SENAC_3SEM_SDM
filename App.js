import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Search from './src/pages/Search/Index.js';
import Home from './src/pages/Home/Index.js';
import Search from './src/pages/Search/Index.js';


const Tab = createBottomTabNavigator();
export default function App() {
  return (

    <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
          <Tab.Screen name="Home" component={Home}  options={{ headerShown: false }} />
        </Tab.Navigator>
    </NavigationContainer>
    
    // <Search/>
    // <Container>
    //   <Title>Open up App.js to start working on your ahhhhpp!</Title>
    //   <StatusBar/>
    // </Container>
  );
}

