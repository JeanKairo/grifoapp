import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TxtG from "../Styles/TxtG";
import Quadrado from "./Quadrado";

export default props => {
    return (
        <View style = {styleTest.FlexV4}>
            <View style = {styleTest.V1}/>
            <View style = {styleTest.V2}/>
        </View>
    )
}

const styleTest = StyleSheet.create({
    FlexV4:{
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000',
        alignItems:'center'
    },

    V1:{

    },

    V2:{

    }
})