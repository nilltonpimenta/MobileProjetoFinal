import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image, TextInput,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'



export default function Main() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={styles.containerHeader1}
      >
        <Text style={styles.message1}>Minhas Passagens</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={styles.containerHeader2}
      >
        <Text style={styles.message2}>Já possuo uma conta</Text>
      </Animatable.View>

      <Animatable.View amimation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.input}
          placeholder="Digite um email..."
          onChangeText={value => setEmail(value)}
          value={email}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput style={styles.input}
          placeholder="Digite sua senha."
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => { Ace() }}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={styles.containerHeader3}
      >
        <Text style={styles.message3}>Acompanhar um pedido</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={styles.containerHeader4}>

        <Text style={styles.message4}>Gerenciar um único pedido</Text>
      </Animatable.View>

      <Animatable.View amimation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.input}
          placeholder="Digite um email..."
          onChangeText={value => setEmail(value)}
          value={email}
        />

        <Text style={styles.title}>Número do pedido</Text>
        <TextInput style={styles.input}
          placeholder="Digite sua senha."
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => { Ace() }}>
          <Text style={styles.buttonText}>Acompanhar pedido</Text>
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
  containerHeader1: {
    marginTop: '5%',
    marginBottom: '0%',
    paddingStart: 0,

  },

  containerHeader2: {
    marginTop: '5%',
    marginBottom: '8%',
    paddingStart: 0
  },

  containerHeader3: {
    marginTop: '5%',
    marginBottom: '2%',
    paddingStart: 0,
  },
  
  containerHeader4: {
    marginTop: '5%',
    marginBottom: '2%',
    paddingStart: 5,
  },

  message1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center'
  },

  message2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center'
  },

  message3: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center'
  },

  message4: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center'
  },

  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius:0,
    borderTopRightRadius: 0,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title: {
    fontSize: 16,
    marginTop: 10,
  },

  input: {
    borderBottomWidth: 1,
    height: 20,
    marginBottom: 2,
    fontSize: 15
  },

  buttonLogin: {
    backgroundColor: '#04B404',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },


})