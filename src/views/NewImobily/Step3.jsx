import React,{useState,useEffect} from 'react'
import { Text, View,TouchableOpacity, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker'
import Icon from '@expo/vector-icons/Feather'
import styles from './style'
export default function Step3({navigation}){

    const [images, setImages] = useState([]);
    let listIMages = []
    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        })();
    }, []);

    const handleSelect = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if(images.length >= 5){
            alert("São permitidas no máximo 5 images!")
            return false
        }
        
        if (!result.cancelled) {
          
          setImages([...images,result.uri]);
         
        }
      };
      
      
    return (
        <View style={[styles.container,{justifyContent: 'center'}]}>
            <View style={styles.containerImages}>
                <TouchableOpacity style={styles.btnSelectImage} onPress={handleSelect}>
                    <Icon size={20}  name="camera" color="#fc6b03"/>
                </TouchableOpacity>
            {images[0] != undefined ? (
                <Image  style={{width: 100,height: 100,resizeMode: 'stretch',borderRadius: 12,marginRight:5}} source={{uri: images[0]}}/>

                ):(
                    <View style={styles.containerImageSelected}>
                        <Icon size={20}  name="image" color="#fc6b03"/>
                    </View>

                )
            }
             {images[1] != undefined ? (
                <Image  style={{width: 100,height: 100,resizeMode: 'stretch',borderRadius: 12,marginRight:5}} source={{uri: images[1]}}/>

                ):(
                    <View style={styles.containerImageSelected}>
                        <Icon size={20}  name="image" color="#fc6b03"/>
                    </View>

                )
            }
             {images[2] != undefined ? (
                <Image  style={{width: 100,height: 100,resizeMode: 'stretch',borderRadius: 12,marginRight:5}} source={{uri: images[1]}}/>

                ):(
                    <View style={styles.containerImageSelected}>
                        <Icon size={20}  name="image" color="#fc6b03"/>
                    </View>

                )
            }
             {images[3] != undefined ? (
                <Image  style={{width: 100,height: 100,resizeMode: 'stretch',borderRadius: 12,marginRight:5}} source={{uri: images[3]}}/>

                ):(
                    <View style={styles.containerImageSelected}>
                        <Icon size={20}  name="image" color="#fc6b03"/>
                    </View>

                )
            }
             {images[4] != undefined ? (
                <Image  style={{width: 100,height: 100,resizeMode: 'stretch',borderRadius: 12,marginRight:5}} source={{uri: images[4]}}/>

                ):(
                    <View style={styles.containerImageSelected}>
                        <Icon size={20}  name="image" color="#fc6b03"/>
                    </View>

                )
            }
           
                
            </View>
           
            <TouchableOpacity style={[styles.button,{margin: 10}]} onPress={()=> navigation.navigate("Home")}>
                    <Text style={styles.textButton}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    )
}