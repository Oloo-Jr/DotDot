import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DotHomeScreen from '../screen/DotDot/DotHomeScreen';
import DotGigScreen from '../screen/DotDot/DotGigScreen';
import DotAcceptedRequest from '../screen/DotDot/DotacceptedRequest';
import DotLoginScreen from '../screen/DotDot/DotLoginScreen';
import MapPage from '../screen/DotDot/MapScreen';
import MapScreen from '../screen/DotDot/MapScreen';



const Home = createNativeStackNavigator();

export function HomeStack() {
    return (
        <Home.Navigator>

<Home.Screen
                name="DotLoginScreen"
                component={DotLoginScreen}
                options={{ headerShown: false }}
            />

<Home.Screen
                name="DotHomeScreen"
                component={DotHomeScreen}
                options={{ headerShown: false }}
            />


<Home.Screen
                name="DotGigScreen"
                component={DotGigScreen}
                options={{ headerShown: false }}
            />

<Home.Screen
                name="DotAcceptedRequest"
                component={DotAcceptedRequest}
                options={{ headerShown: false }}
            />
            <Home.Screen
                name="DotMap"
                component={MapScreen}
                options={{ headerShown: false }}
            />


        </Home.Navigator>
    )
}