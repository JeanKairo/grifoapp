import React from "react";
import { Text, StyleSheet } from "react-native";

export default function ResetPassword() {
   return<Text style = {StyleReset.Estilo}>Esqueceu a Senha?</Text>
   
}

const StyleReset = StyleSheet.create({
    Estilo:{
        alignItems: 'center',
        color: 'whitesmoke'
    }
});