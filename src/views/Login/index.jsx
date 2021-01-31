import React from 'react'
import { KeyboardAvoidingView, Text, View,Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
import logo from '../../../assets/images/logo.png'
import facebook from '../../../assets/images/facebook.png'
import Icon from '@expo/vector-icons/Feather'
export default function Login({navigation}){

    function handleNext(){
        navigation.navigate("Tabs")
    }
    return (
        <KeyboardAvoidingView style={styles.container} >
            <View style={styles.containerImg}>
                <Image style={styles.logo} source={logo}/>
                
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Email"/>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry/>
                <TouchableOpacity style={styles.btnLogin} onPress={handleNext}>
                    <Icon style={{marginRight: 3}} name="log-in" size={18} color="#fff"/>
                    <Text style={{color: '#fff',fontSize: 15}}>
                        Entrar
                    </Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.btnLoginFace} onPress={handleNext}>
                    {/* <Icon style={{marginRight: 3}} name="facebook" size={18} color="#fff"/> */}
                    <Image source={facebook} style={styles.faceIcon}/>
                    <Text style={{color: '#fff',fontSize: 15}}>
                        Conectar com o Facebook
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
    )
}