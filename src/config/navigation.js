// In App.js in a new project

import React, { useEffect, useState, useContext } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet,KeyboardAvoidingView,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/component/login';
import RashanForm from '../screen/application-form';
import Register from '../screen/component/register';
import { auth, onAuthStateChanged, doc, setDoc, db, getDoc } from "../config/firebase";
import ManagerLogin from '../screen/component/managerlogin';
import ManagerHome from '../screen/manager-home';
import { GlobalContext } from '../context/context';
import LocationMap from '../screen/component/locationMap';



const Stack = createNativeStackNavigator();

export default function RouteNavigation() {

    const { state, dispatch } = useContext(GlobalContext)

    // const[userRole , setUserRole] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                fetchUserInfo(user.uid);
                console.log('user found !');
            }
            else {
                console.log('user not found');
                dispatch({ type: "AUTH_USER", payload: null });
            }
        });

    }, []);


    const fetchUserInfo = async (uid) => {
        let userRef = doc(db, 'users', uid);
        let userInfo = await getDoc(userRef);
        userInfo = userInfo.data();
        // localStorage.setItem('userId',userInfo.uid)

        // console.log(userInfo)
        dispatch({ type: "AUTH_USER", payload: userInfo });


    }







    return (
        // <NavigationContainer>
        //     <Stack.Navigator>
        <>

                {state?.authUser ?
                    null :
                    <NavigationContainer>
                        <Stack.Navigator>
                        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
                        <Stack.Screen options={{ headerShown: false }} name="ManagerLogin" component={ManagerLogin} />
                        </Stack.Navigator>
                        </NavigationContainer>
                }



                {state?.authUser?.role === 'user' ?
                    <NavigationContainer>
                        <Stack.Navigator>

                            <Stack.Screen options={{ headerShown: false }} name="Map" component={LocationMap} />
                            <Stack.Screen options={{ headerShown: false }} name="RashanForm" component={RashanForm} />
                        </Stack.Navigator>
                    </NavigationContainer>
                    : null
                }
                {state?.authUser?.role === 'manager' ?
                    <NavigationContainer>
                        <Stack.Navigator>
                            
                            <Stack.Screen options={{ headerShown: false }} name="ManagerHome" component={ManagerHome} />
                        </Stack.Navigator>
                    </NavigationContainer>
                    : null
                }




                {/* <Stack.Screen options={{ headerShown: false }} name="ManagerLogin" component={ManagerLogin} /> */}


                </>

        //     </Stack.Navigator>
        // </NavigationContainer>
    );
}

// const styles = StyleSheet.create({

//     button: {
//         backgroundColor: '#0782F9',
//         width: '60%',
//         borderRadius: 10,
//         padding: 10,
//         alignItems: 'center',
//         // justifyContent:'center',
//         fontWeight: 'bold',


//     },
//     buttonOutline: {
//         backgroundColor: '#fff',
//         width: '60%',
//         borderRadius: 10,
//         padding: 10,
//         alignItems: 'center',
//         marginTop:10,
//         borderColor:'#0782F9',
//         borderWidth:2

//     },
//     input: {
//         width: 350,
//         height: 55,
//         backgroundColor: '#333',
//         margin: 10,
//         padding: 10,
//         color: 'white',
//         borderRadius: 14,
//         fontSize: 18,
//         fontWeight: '500',
//       },

// })