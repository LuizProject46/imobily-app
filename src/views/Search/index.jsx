import React from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import styles from './style'
export default function Search(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Pesquisar Imóveis
            </Text>
            <TextInput style={styles.input} placeholder="Pesquisar..." />
        </View>
    )
}