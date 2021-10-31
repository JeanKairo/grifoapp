import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TxtG from "../Styles/TxtG";
import Quadrado from "./Quadrado";

export default props => {
    return (
        <View style = {styleTest.FlexV2}>
            <Quadrado cor='#fff'/>
            <Quadrado cor='#fcba03'/>
            <Quadrado cor='#0048ff'/>
            <Quadrado cor='#263866'/>
            <Quadrado cor='#5b1061'/>
        </View>
    )
}

const styleTest = StyleSheet.create({
    FlexV2:{
        width: '100%',
        backgroundColor: '#000',
        alignItems:'center'
    }
})