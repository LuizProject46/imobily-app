import React from 'react'
import { useState } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { RectButton, TextInput } from 'react-native-gesture-handler'
import MapView,{Marker,MapEvent} from 'react-native-maps'
import mapMarker from '../../../assets/images/mapMarker.png'
import styles from './style'
export default function Step2({navigation}){
    const [position,setPosition] = useState({latitude:0,longitude:0})

    function handleSelectPosition(event){
        
        setPosition(event.nativeEvent.coordinate)
    
      }
    return (
        <View style={styles.container}>
            <MapView
            initialRegion={{
                latitude: -22.8424849,
                longitude: -47.4013886,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008, 
              }}
             style={styles.map}
             onPress={handleSelectPosition}
            >
            {position.latitude != 0 && (
                 
                 <Marker 
                 icon={mapMarker}
                 coordinate={{ latitude: position.latitude, longitude: position.longitude }}
                 
               />
              
                
            )}
           
            </MapView>
            {position.latitude != 0 && (
                <RectButton style={styles.buttonMap} onPress={()=> navigation.navigate("Step3")}>
                    <Text style={styles.textButton}>Continuar</Text>
                </RectButton>
           )}
        </View>
    )
}