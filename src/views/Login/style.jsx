import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    logo:{
        width: 400,
        height: 400,
        resizeMode: 'stretch',
        
        
    },
    containerImg:{
        flex: 1,
        
    },
    form:{
        flex: 1,
        width: Dimensions.get('window').width * 2 / 3,
        
    },
    input:{
        height: 42,
        fontSize: 16,
        backgroundColor: '#fff',
        width: '100%',
        marginBottom: 20,
        borderRadius: 8
    },
    btnLogin:{
        backgroundColor: '#fc6b03',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 25
    },
    btnLoginFace:{
        backgroundColor: '#1976d3',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    faceIcon:{
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginRight: 5
    }
})

export default styles