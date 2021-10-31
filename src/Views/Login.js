import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, SafeAreaView } from 'react-native';

export default StyleSheet.create({
    EstiloLogin:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
    
      EstiloCaixa:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: '10%',
        backgroundColor: '#266621',
        marginLeft: 50,
        marginTop: 20,
    },
    
    EstiloText:{
        marginLeft:10,
        width:'90%',
        backgroundColor:'#c5d1c5',
        marginTop: 10,
        height:'10%',
        justifyContent:'center'
    },
    
    button: {
      alignItems: 'center',
      backgroundColor: '#ad0000',
      padding: 10,
      width: '70%',
      marginTop: 20,
      marginLeft: 50,
      borderRadius: 20
    },
    
    AumentoTela:{
      height: '100%',
      backgroundColor: "#2a2a2b"
    },
    
    TextLogin:{
      color:'whitesmoke',
    }

})

            