import React from 'react';
import { View, 
  Text, 
  StyleSheet,
  Image, TextInput,
  TouchableOpacity,
 } from 'react-native';

 import * as Animatable from 'react-native-animatable'

 import {useNavigation} from '@react-navigation/native'
 


export default function Main() {
const navigation = useNavigation();

 return (
   <View style={styles.container}>
    
    <View style={styles.containerLogo}>
      <Animatable.Image delay={600}
      animation="flipInY"
      source={require('../../assets/Logo.png')}
      style={styles.Logo}
      resizeMode="contain"
      />
    </View>
    
    <Animatable.View delay={600}animation="fadeInUp" style={styles.containerForm}>
      <Text style={styles.title}>Encontre sua passagem de ônibus</Text> 
      <View style={styles.form}>
        

        <TextInput
          style={styles.input}
          placeholder='Cidade Origem'
        />
        <TextInput
          style={styles.input}
          placeholder='Cidade Destino'
        />

        <TextInput
          style={styles.input}
          placeholder='Data Ida'
        />

        <TextInput
          style={styles.input}
          placeholder='Data Volta'
        />
      </View>
      
    
      
    <TouchableOpacity 
      style={styles.button}
      onPress={() => {navigation.navigate('Compra')}}
      >
      <Text style={styles.buttonText}>BUSCAR PASSAGENS</Text>
    </TouchableOpacity>
    </Animatable.View>
    

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