import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            emailId: '',
            password: '',
        }
    }

    userSignUp = (emailId, password) => {
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
            .then((response) => {
                return Alert.alert("User added sucessfully");
            })
            .catch(function (error) {
                var error = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            })
    }

    userLogin = (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password)
            .then(() => {
                return Alert.alert("Good job! you logged in");
            })
            .catch(function (error) {
                var error = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            })
    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Bartar System App</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.container}
                        placeholder="abc@example.com"
                        keyboardType='email-address'
                        onChangeText={(text) => {
                            this.setState({
                                emailId: text
                            })
                        }}
                    />

                    <TextInput
                        style={styles.container}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }}
                    />

                    <TouchableOpacity style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
                        onPress={() => { this.userLogin(this.state.emailId, this.state.password) }}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                        onPress={() => { this.userSignUp(this.state.emailId, this.state.password) }}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'white'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : 'red'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"green",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'black',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    }
  })