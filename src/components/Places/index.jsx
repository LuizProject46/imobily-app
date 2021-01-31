import React from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Places({info : {name,price,image,type},direction}){
    return (
        <View style={[styles.container,{flexDirection: direction == 'H' ? 'column' : 'row'}]}>
            <View>
                <Image style={styles.image} source={{uri: image}}/>
                <Text style={styles.name}>
                    {name}
                </Text>
            </View>
            <View style={{justifyContent: 'space-between'}}>
                <Text style={styles.price}>R${price}</Text>
                <Text style={[styles.type,direction == "H" ? {width: 80}: {}]}>{type}</Text>
                <TouchableOpacity style={{marginHorizontal: 20}}>
                    <Text style={styles.btnInfo}>
                        Ver mais
                    </Text>
                </TouchableOpacity>
            </View>
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        margin: 5,
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row'
    },
    name:{
        margin: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    image:{
        width: 200,
        height: 100,
        resizeMode: 'stretch',
        borderRadius: 10
    },
    price:{
        marginHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    type:{
        marginHorizontal: 20,
        fontSize: 14,
        color: '#51b174',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#51b174',
        padding: 4,
        borderRadius: 10
    },
    btnInfo:{
        color: '#1689f5'
    }
    
})