import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


import Busca from '../pages/Busca'
import SignIn from '../pages/SignIn'
import Compras from '../pages/Compra';
import SignUp from '../pages/SignUp';


const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#2f1',
                tabBarShowLabel: true,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#04B404',
                    borderTopWidth: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    borderRadius: 0,
                    height: 60

                }
            }}>

            <Tab.Screen
                name="Buscar Passagens"
                component={Busca}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="bus" size={30} color={color} />
                        }

                        return <Ionicons name="bus" size={30} color={color} />
                    }

                }}

            />

            <Tab.Screen
                name="Meus Tickets"
                component={Compras}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <MaterialCommunityIcons name="ticket-confirmation" size={32} color={color} />
                        }

                        return <MaterialCommunityIcons name="ticket-confirmation-outline" size={32} color={color} />
                    }

                }}
            />

            <Tab.Screen
                name="Login"
                component={SignIn}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <SimpleLineIcons name="login" size={24} color={color} />
                        }

                        return <SimpleLineIcons name="login" size={25} color={color} />
                    }

                }}
            />

            <Tab.Screen
                name="Cadastrar"
                component={SignUp}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <FontAwesome5 name="user-plus" size={24} color={color} />
                        }

                        return <FontAwesome5 name="user-plus" size={24} color={color} />
                    }

                }}
            />


        </Tab.Navigator>
    )
}

export default Routes;