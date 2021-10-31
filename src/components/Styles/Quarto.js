import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Login() {
   return <Text style = {StyleLogin.Estilo}>Login</Text>  
}

const StyleLogin = StyleSheet.create({
    Estilo:{
        color: '#000' ,
        fontSize:20,
    },

    EstiloCaixa:{
        alignItems: 'center',
        justifyContent: 'center'
    }
});