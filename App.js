import React from 'react';
import { StyleSheet, Text, View , TextInput , Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding : 80}}>
      <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
        <TextInput placeholder="Cource level" style={{width : '80%' , borderBottomColor : 'blueviolet'  , borderBottomWidth : 1}}/>
        <Button title="ADD"/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
