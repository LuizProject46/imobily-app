import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40
    },
    image:{
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        borderColor: '#fc6b03',
        borderWidth: 2
    },
    containerInfo:{
        alignItems: 'center',
        paddingTop: 20,
        
    },
    textInfo:{
        fontSize: 18,
        marginBottom: 10,
        color: '#333'
    },
    qtdPost:{
        padding: 10,
        backgroundColor: '#1689f5',
        borderRadius: 12,
        marginTop: 10,
        marginBottom: 25
        
    }
})

export default styles