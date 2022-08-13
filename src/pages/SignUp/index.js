import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import * as Animatable from 'react-native-animatable'


export default function Register() {
  const navigation = useNavigation();
  
  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    console.log("Cadastrado!");
    let user = userCredential.user;
    // ...
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    // ..
  });
  

  return (
    
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={styles.containerHeader1}
        >
        <Text style={styles.message1}>Olá, você é novo por aqui ?</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={styles.containerHeader2}
        >
        <Text style={styles.message2}>Crie sua conta</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerForm}>
        
        <TextInput style={styles.input}
        placeholder="Digite seu username" 
        onChangeText={value => setUsername(value)} 
        value={username}
        />

        
        <TextInput style={styles.input} 
        placeholder="Digite um email" 
        onChangeText={value => setEmail(value)} 
        value={email}
        />

        <TextInput style={styles.input} 
        placeholder="Digite sua senha" 
        onChangeText={value => setPassword(value)} 
        value={password}
        secureTextEntry={true}
        />

          <TouchableOpacity 
            style={styles.buttonCadastrar} 
            onPress={()=>{Register()}}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

        </Animatable.View>

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04B404'
  },
  containerHeader1:{
    marginTop: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerHeader2:{
    marginBottom: '20%',
    
  },

  message1:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },

  message2:{
    fontSize: 23,
    color: '#FFF',
    paddingLeft: 5, 
    textAlign: 'left'
  },

  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },

  input: {
    borderBottomWidth: 1,
    height: 70  ,
    marginBottom: 12,
    fontSize: 16
  },

  buttonCadastrar: {
    backgroundColor: '#04B404',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },

  registerText: {
    color: '#a1a1a1',
  },

})