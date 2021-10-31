import React from "react";
import { Text, StyleSheet, TextInput } from "react-native";

export default function SenhaInput () {
    const [text, onChangeText] = React.useState(null);
  
    return (
        <TextInput
        style={StyleSenha.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Senha"
          secureTextEntry={true}
        />
    );
  };

const StyleSenha = StyleSheet.create({
    Estilo:{
        textDecorationLine: 'underline',
        width: '80%',
        alignItems:'center',
        color:'#636963',        
        fontSize: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'whitesmoke',
        marginTop: 10,
        justifyContent:'center',        
        borderRadius: 20
      },
});