import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import MainScreen from '../pages/MainScreen'


const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name="Welcome" 
                component={Welcome}
                options={{headerShown: false}}
            />


            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
            />

            <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )   
}