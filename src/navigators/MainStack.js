import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screens/Splash'; 
import Login from '../screens/Login'; 

const Stack = createStackNavigator(); 

export default () => (
    <Stack.Navigator
        initialRouteName='Splash'
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
)