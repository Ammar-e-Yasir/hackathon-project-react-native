// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,KeyboardAvoidingView,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen() {


    
    return (
        <KeyboardAvoidingView  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} behavior='padding'
        
        >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
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
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text)=>{setPassword(text)}}
        />
            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'#fff'}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOutline}>
                <Text  style={{fontSize:16,fontWeight:'bold',color:'#0782F9'}} >Register</Text>
            </TouchableOpacity>

        </View>
        </KeyboardAvoidingView>

    );
}

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        // justifyContent:'center',
        fontWeight: 'bold',


    },
    buttonOutline: {
        backgroundColor: '#fff',
        width: '60%',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginTop:10,
        borderColor:'#0782F9',
        borderWidth:2

    },
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

})