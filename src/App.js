
import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

/* import nome from './components/primeiro' */


import Page from './navigation/nav'
export default function App() {
        
  return (
    <View >
     {/* <Login /> */}
      
      <Page inicial={0}/>
      {/* <Botao />  */}
      {/* <Flex /> */}
      {/* <Contador inicial={50} /> */}
 
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 2,
  
  }

});
