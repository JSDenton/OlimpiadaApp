import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home.js'
import Sections from './components/Sections.js'
import LogIn from './components/LogIn.js'
import {LogInButton} from './components/LogInButton.js'
import {styles} from './styles/styles.js'


const Stack = createNativeStackNavigator();

export default function App() {
    const headerStyle = {headerStyle:styles.header.headerStyle, headerTitleStyle:styles.header.headerTitleStyle, headerTintColor:styles.header.headerTintColor}
    //console.log(headerStyle)
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions= {headerStyle}>
                <Stack.Screen name="Edycje" component={Home}
                    options={{title: 'Edycje olimpiady',
                    headerRight: ()=>(<LogInButton />)
                    }}
                />
                <Stack.Screen name="Sekcje" component={Sections}
                options={{title: 'Sekcje',
                    headerRight: ()=>(<LogInButton />)
                }}/>
                <Stack.Screen name="LogIn" component={LogIn} options={{title:"logowanie"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
