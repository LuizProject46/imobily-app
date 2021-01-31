import React from 'react'
import {  KeyboardAvoidingView, Text,View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'



import styles from './style'

export default function NewImobily({navigation}){
    
  
    return (
        <KeyboardAvoidingView 
       
        style={[styles.container,{justifyContent: 'center'}]}>
           
            <View style={styles.form}>
                <Text style={styles.title}>
                    Cadastrar Imóvel
                </Text>
                <TextInput style={styles.input} placeholder="Nome"/>
                <TextInput style={styles.input} keyboardType='numeric' placeholder="Preço"/>
                <Text style={{marginHorizontal: 20,marginTop: 15,marginBottom: 10,color: '#666'}}>Ex: Aluguel ou compra</Text>
                <TextInput style={styles.input}placeholder="Tipo"/>
                <TextInput style={styles.input} multiline={true} textAlignVertical='top' numberOfLines={4} placeholder="Descrição"/>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Step2")}>
                    <Text style={styles.textButton}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}