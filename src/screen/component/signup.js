import React, { useState } from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text
} from 'react-native'

export default function SignUp() {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const [username , setUsername] = useState();
    const [number , setNumber] = useState();



    const register = (e)=>{
        let user = {email,password,username,number}
        console.log('userData' , user);
      
    }
  
//   onChangeText = (key, val) => {
//     this.setState({ [key]: val })
//   }
//   signUp = async () => {
//     const { username, password, email, phone_number } = this.state
//     try {
//       // here place your signup logic
//       console.log('user successfully signed up!: ', success)
//     } catch (err) {
//       console.log('error signing up: ', err)
//     }
//   }
 
  
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Signup !</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text)=>{setUsername(text)}}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text)=>{setPassword(text)}}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          keyboardType = 'email-address'
          onChangeText={(text)=>{setEmail(text)}}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          keyboardType = 'number-pad'
          onChangeText={(text)=>{setNumber(text)}}
        />
        <Button
          title='Sign Up'
          onPress={(e)=>{register(e)}}
        />
      </View>
    )
  }


const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#333',
    margin: 10,
    padding: 10,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  text:{
      fontSize:40,
      color:'#333',
      fontWeight:'bold'

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff'
  }
})