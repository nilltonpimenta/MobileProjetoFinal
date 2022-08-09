import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../../services/firebaseConnection';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'


export default function Acess() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  async function Login(){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    alert=("Logado com sucesso !")
    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }
  

  useEffect(() =>{
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('logado \n' + user.uid)

      } else {
        console.log('Não logado !')
      }
    });

  },[])


  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View amimation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.input} 
        placeholder="Digite um email..." 
        onChangeText={value => setEmail(value)} 
        value={email}
        />

        <Text style={styles.title}>Password</Text>
        <TextInput style={styles.input} 
        placeholder="Digite sua senha." 
        onChangeText={value => setPassword(value)} 
        value={password}
        secureTextEntry={true}
        />

        <TouchableOpacity 
          style={styles.buttonLogin} 
          onPress={()=>{Login()}}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonTextRegister}>
          Não possui uma conta ? Cadastre-se
          </Text>
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
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },

  message:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'
  },

  containerForm:{
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title:{
    fontSize: 20,
    marginTop: 28,
  },
  
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },

  buttonLogin:{
    backgroundColor: '#04B404',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },

  buttonRegister:{
    marginTop: 35,
    alignSelf: 'center',
    justifyContent: 'center'
  },

  buttonTextRegister:{
    color: '#a1a1a1',
    fontSize: 15
  }

})