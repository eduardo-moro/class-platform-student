import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screens/Splash'; 
import Login from '../screens/Login'; 
import Home from '../screens/Home';

const Stack = createStackNavigator(); 

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
)