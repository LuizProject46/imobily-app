import React from 'react'
import {Dimensions, StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex:1,
        
    },
    title:{
        padding: 35,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fc6b03'
    },
    form:{
        marginHorizontal: 20,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12
    },
    input:{
        padding: 10,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#999',
        borderWidth: 0.5,
        margin: 5
    },
    button:{
        backgroundColor: '#fc6b03',
        alignItems: 'center',
        marginTop: 30,
        padding: 20,
        borderRadius: 15
    },
    textButton:{
        fontSize: 16,
        color: '#fff'
    },
    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    buttonMap:{
        backgroundColor: '#fc6b03',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
    
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 40
    },
    containerImages:{
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 12,
        height: Dimensions.get('window').height / 2,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    btnSelectImage:{
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: '#fc6b03',
        width: 100,
        height: 100,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10
        

    },
    containerImageSelected:{
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#fc6b03',
        width: 100,
        height: 100,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10
       
    }
})

export default styles