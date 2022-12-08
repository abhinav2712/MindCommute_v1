import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image,StatusBar,LayoutAnimation } from 'react-native';
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import firebase from "firebase/compat";
export default class RegisterScreen extends React.Component {

    static navigationOptions={
        headerShown:false
    }

    state={
        name:"",
        email:"",
        password:"",
        errorMessage:null
    
    }
    
    handleSignUP=()=>{
        const {email,password,name}=this.state
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(userCredentials=>{
            return userCredentials.user.updateProfile({
                displayName:name
            });
        })
        .catch(error=>this.setState({errorMessage:error.message}))
    }

    render() {
        return (
            <View style={styles.container}>
             <StatusBar barStyle={"light-content"}></StatusBar>
             <Image source={require("../assets/authHeader.png")} style={{position:"absolute",top:-250,left:-20,width:450,height:450}}></Image>
            <Image source={require("../assets/authFooter.png")} style={{position:"absolute",bottom:-100,right:-50,width:450,height:450,opacity:0.5}}></Image>  
              
               <TouchableOpacity style={styles.back} onPress={()=>this.props.navigation.goBack()}>
                     <Ionicons name="arrow-back" size={30}  color="#ffff"></Ionicons>
                 
               </TouchableOpacity>
               
            <View style={{position:"absolute",top:64,alignItems:"center",width:"100%"}}>
            <Text style={styles.greeting}>
                    {'Hello.\n Sign Up to get started.'}
                </Text>
                <TouchableOpacity style={styles.avatar}>
                <Ionicons name="ios-add" size={40} color="#FFF" style={{marginTop:6,marginLeft:2}}></Ionicons>
                </TouchableOpacity>
            </View>



               

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={StyleSheet.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View >
                        <Text style={styles.inputTitle}>Full Name</Text>
                        <TextInput style={styles.input} autoCapitalize="none"
                         onChangeText={name=>this.setState({name})}
                            value={this.state.name}
                         ></TextInput>
                         
                    </View>

                    <View  style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput style={styles.input} autoCapitalize="none"
                         onChangeText={email=>this.setState({email})}
                            value={this.state.email}
                         ></TextInput>
                         
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize="none"
                        onChangeText={password=>this.setState({password})}
                        value={this.state.password}
                        ></TextInput>
                    </View>

                </View>

             <TouchableOpacity style={styles.button} onPress={this.handleSignUP}>
               <Text style={{color:"#fff",fontWeight:"800"}}>Sign Up</Text>
             </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center",marginTop:32}} 
            onPress={()=>this.props.navigation.navigate("Login")}>   
            {/* on press isnt working */}
                <Text style={{color:"#414959",fontSize:13}}>
                    New to MindCommute? <Text style={{fontWeight:"500",color:"#f29655"}}>Login</Text>
                </Text>
   
                {/* once logged in, go back to login page and login with the same credentials */}
            </TouchableOpacity>



            </View>

           

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    greeting: {
        marginTop: 50,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
        color:"red"
    },
    error:{
    color:"#E9446A",
    fontSize:13,
    fontWeight:"600",
    textAlign:"center"
    },
    form: {
        marginTop: 280,
        marginBottom: 40,
        marginHorizontal: 30,
    },
    inputTitle: {
        color: "#f29655",
        fontSize: 10,
        textTransform: "uppercase",
        

    },
    input: {
        borderBottomColor: "#8a8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",

    },
    button:{
        marginHorizontal:30,
        backgroundColor:"#f29655",
        borderRadius:4,
        height:52,
        alignItems:"center",
        justifyContent:"center",
        
    },
    back:{
        position:"absolute",
        top:48,
        left:32,
        width:42,
        height:42,
        borderRadius:16,
        backgroundColor:"rgba(21,22,48,0.1)",
        alignItems:"center",
        justifyContent:"center"
        

    },
    avatar:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:"#E1E2E6",
        marginTop:48,
        justifyContent:"center",
        alignItems:"center"
    }
   
});