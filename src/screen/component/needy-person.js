import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Text,Picker,TouchableOpacity } from "react-native";
import { auth,signOut } from '../../config/firebase'


export default function NeedyPersonSignUp({navigation}) {
  const [name, setName] = useState();
  const [fName, setFName] = useState();
  const [cnic, setCnic] = useState();
  const [member, setMember] = useState();
  const [dob, setDOB] = useState();
  const [incom, setIncom] = useState();

  const register = (e) => {
    let user = {name,fName,cnic,member,dob,incom};
    console.log("userData", user);
  };

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
      <Text style={styles.text}>Signup !</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Father Name"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setFName(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="CNIC"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setCnic(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="DD-MM-YY"
        autoCapitalize="none"
        keyboardType="number-pad"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setDOB(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Family members"
        autoCapitalize="none"
        keyboardType="number-pad"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setMember(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Monthly Incom"
        autoCapitalize="none"
        placeholderTextColor="white"
        keyboardType="number-pad"
        onChangeText={(text) => {
          setIncom(text);
        }}
      />

<Picker
        // selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Montly" value="monthly" />
        <Picker.Item label="Daily 1 time" value="1 time " />
        <Picker.Item label="Daily 2 time" value="2 time " />
        <Picker.Item label="Daily 3 time" value="3 time " />
      </Picker>

      <TouchableOpacity style={styles.buttonOutline}>
                <Text  style={{fontSize:16,fontWeight:'bold',color:'#0782F9'}} >Register</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 40,
    backgroundColor: "#333",
    margin: 10,
    padding: 10,
    color: "white",
    borderRadius: 14,
    fontSize: 16,
    fontWeight: "500",
  },
  text: {
    fontSize: 40,
    color: "#333",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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

}
});
