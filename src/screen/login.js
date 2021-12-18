import  React,{useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Input,
  SafeAreaView
} from "react-native";

import { auth, signOut,signInWithEmailAndPassword } from '../config/firebase'


export default function Login({ navigation }) {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const login = async () => {

        try {
            let a = await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('RashanForm')

        }

        catch (err) {
            console.log(err.message);


            switch (err.message) {
                case 'Firebase: Error (auth/invalid-email).':
                    setErrMsg('Invalid Email !');
                    break;
                case 'Firebase: Error (auth/wrong-password).':
                    setErrMsg('Incorrect Password !');
                    break;
            
            }
            setTimeout(() => { setErrMsg('') }, 2000)

        }

    }

  return (


    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      behavior="padding"
    >
      <View
       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
       >
        <Image
          source={require("./images/logo.png")}
          style={{ height: 100, width: 205,marginTop:120 }}
        />

        <Text style={{ fontSize: 32, marginTop: 5, fontWeight: "bold" }}>
          User Login
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          keyboardType="email-address"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />

        <TouchableOpacity onPress={() => {}}>
          <Text style={{ color: "#0782F9", fontSize: 18,margin:10 }}>
            forgot password !
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          onPress={() =>{login()}}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "green",
              backgroundColor: "white",
              marginTop: 10,
              padding: 5,
              borderRadius: 10,
            }}
          >
            user create account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ManagerLogin");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              backgroundColor: "black",
              marginTop: 10,
              padding: 5,
              borderRadius: 10,
            }}
          >
            Manager login
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={async() => {
            try {

                await signOut(auth);
              
            } catch (error) {
                console.log(error)
            }
        
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              backgroundColor: "black",
              marginTop: 10,
              padding: 5,
              borderRadius: 10,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.buttonOutline}>
                <Text  style={{fontSize:16,fontWeight:'bold',color:'#0782F9'}} >Register</Text>
            </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    // justifyContent:'center',
    fontWeight: "bold",
  },
  buttonOutline: {
    backgroundColor: "#fff",
    width: "60%",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#333",
    margin: 10,
    padding: 10,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
});
