import React,{useState} from 'react';

import {
    View,Text,StyleSheet,Button,TouchableOpacity,SafeAreaView
} from 'react-native';
import FlexBoxV1 from '../components/layout/FlexBoxV1';
import Terceiro from '../components/Styles/Terceiro';
import Quarto from '../components/Styles/Quarto';
/* import Quinto from '../components/Quinto'; */
import EmailInput from '../components/Styles/Primeiro';
import SenhaInput from '../components/Styles/Segundo';

import Login from '../Views/Login'

export default props => {
    //let numero = props.inicial
    const[numero, setNumero] = useState(props.inicial)
    const inc = ()=>setNumero(numero+1)
    const dec = ()=> setNumero(numero-1)
    if (numero==0) {
        //Login
        return (
            <SafeAreaView style ={Login.AumentoTela} >
              <FlexBoxV1/>
              <View>
                <EmailInput/>
              </View>
              <View>
                <SenhaInput/>
              </View>
              <View style = {Login.EstiloLogin}>
                <Terceiro/>
              </View>
              <View>
                
                <TouchableOpacity style={Login.button}  onPress={inc}>
                  <Text style = {Login.TextLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Login.button}  onPress={dec}>
                  <Text style = {Login.TextLogin}>Cadastre-se</Text>
                </TouchableOpacity>
              </View>
              <View>
                {/* <Quinto/> */}
              </View>
            </SafeAreaView>
          );
        
    }if(numero==1){
        //Menu
        return (
             <SafeAreaView style={{
                 
                 justifyContent: 'center',
                 alignContent:'center',
             }}>
                <TouchableOpacity style={Login.button}  onPress={dec}>
                <Text style = {Login.TextLogin}>Menu, voltar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }if(numero==-1){
       //Cadastro
        return (
            <SafeAreaView>
              <TouchableOpacity style={Login.button}  onPress={inc}>
               <Text style = {Login.TextLogin}>Cadastro, voltar</Text>
              </TouchableOpacity>
            </SafeAreaView>
      );
    }
 }



 