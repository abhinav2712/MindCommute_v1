import React from "react";
import {View,Text,StyleSheet,ActivityIndicator} from 'react-native';

export default class MessageScreen extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Message Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});