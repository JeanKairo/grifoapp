import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import TxtG from "../Styles/TxtG";
import Quadrado from "./Quadrado";

export default props => {
    return (
        <View style = {styleTest.FlexV1}>
            <Image source = {require('../imgs/Ativo3.png')} 
            style = {styleTest.Imagem} />            
        </View>
    )
}

const styleTest = StyleSheet.create({
    FlexV1:{
        marginTop: '20%',
        alignItems:'center'
    },

    Imagem:{
        height: 200,
        width: 200
    }
    
})