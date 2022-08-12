import React from 'react';
import { View, 
  Text, 
  StyleSheet,
  Image, TextInput,
  TouchableOpacity,
 } from 'react-native';

 import * as Animatable from 'react-native-animatable'

 import {useNavigation} from '@react-navigation/native'
 
export default function Pagamento() {

 return (
   <View style={styles.container}>
    
    <Text>Tela de Pagamento</Text>

   </View>
  );

}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor: '#04B404'
  },
  
  containerLogo:{
    flex: 1,
    backgroundColor: '#04B404',
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerForm:{
    flex: 3,
    backgroundColor: '#FFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },

  text:{
    color: '#a1a1a1',
    fontSize: 15
  },

  button:{
    position: 'absolute',
    backgroundColor: '#04B404',
    borderRadius: 50,
    paddingVertical: 8,
    width: '80%',
    alignSelf: 'center',
    bottom: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },

  Logo:{
    width: 150,
    margin: 0,
  },

  input:{
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    borderBottomWidth: 1,
    height: 45,
  }
})