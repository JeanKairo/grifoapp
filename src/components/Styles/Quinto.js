import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Cadastrar() {
   return<View style = {StyleCadastrar.Estilo}>        
        <Text style = {StyleCadastrar.Cor2}>Não tem conta:</Text>
        <View style = {StyleCadastrar.Espaco}/>
        <Text style = {StyleCadastrar.Cor1}>Cadastre-se</Text>
    </View>
   
}

const StyleCadastrar = StyleSheet.create({
    Estilo:{
        flexDirection:"row",
        justifyContent: 'center'
    },

    Cor1:{
        color: '#ad0000'
    },

    Cor2:{
        color: 'whitesmoke'
    },
    Espaco:{
        width:5
    }
});