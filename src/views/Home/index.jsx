import React from 'react'
import { View,Text } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Feather'
import Places from '../../components/Places'
import style from './style'

export default function Home({navigation}){
    const places = [
        {
            id: 1,
            name: "Predio 1",
            type: "Compra",
            price: 20000,
            image: 'https://lh3.googleusercontent.com/proxy/UIb2DRBhETi1XYSPGKEQKYwHswxB_7z-ITwGig0TwwBscSBB4HvHU09TEQVUJoOxgAX0tOiM1aQUODcjfqZhASshtw8m1_8p124mhNORJZO8Znt__HvS2NoDEJmxxmbGMtPQBNXh7R67PgYA'
        },
        {
            id: 2,
            name: "Casa 1",
            type: "Aluguel",
            price: 10000,
            image: 'https://lh3.googleusercontent.com/proxy/UIb2DRBhETi1XYSPGKEQKYwHswxB_7z-ITwGig0TwwBscSBB4HvHU09TEQVUJoOxgAX0tOiM1aQUODcjfqZhASshtw8m1_8p124mhNORJZO8Znt__HvS2NoDEJmxxmbGMtPQBNXh7R67PgYA'
        },
        {
            id: 3,
            name: "Predio 2",
            type: "Compra",
            price: 50000,
            image: 'https://lh3.googleusercontent.com/proxy/UIb2DRBhETi1XYSPGKEQKYwHswxB_7z-ITwGig0TwwBscSBB4HvHU09TEQVUJoOxgAX0tOiM1aQUODcjfqZhASshtw8m1_8p124mhNORJZO8Znt__HvS2NoDEJmxxmbGMtPQBNXh7R67PgYA'
        },
        {
            id: 4,
            name: "Predio 6",
            type: "Compra",
            price: 250000,
            image: 'https://lh3.googleusercontent.com/proxy/UIb2DRBhETi1XYSPGKEQKYwHswxB_7z-ITwGig0TwwBscSBB4HvHU09TEQVUJoOxgAX0tOiM1aQUODcjfqZhASshtw8m1_8p124mhNORJZO8Znt__HvS2NoDEJmxxmbGMtPQBNXh7R67PgYA'
        },
        {
            id: 5,
            name: "Predio 6",
            type: "Compra",
            price: 250000,
            image: 'https://lh3.googleusercontent.com/proxy/UIb2DRBhETi1XYSPGKEQKYwHswxB_7z-ITwGig0TwwBscSBB4HvHU09TEQVUJoOxgAX0tOiM1aQUODcjfqZhASshtw8m1_8p124mhNORJZO8Znt__HvS2NoDEJmxxmbGMtPQBNXh7R67PgYA'
        },
        {
            id: 6,
            name: "Predio 6",
            type: "Compra",
            price: 250000,
            image: 'https://lh3.googleusercontent.com/proxy/UIb2DRBhETi1XYSPGKEQKYwHswxB_7z-ITwGig0TwwBscSBB4HvHU09TEQVUJoOxgAX0tOiM1aQUODcjfqZhASshtw8m1_8p124mhNORJZO8Znt__HvS2NoDEJmxxmbGMtPQBNXh7R67PgYA'
        },
        {
            id: 7,
            name: "Predio 6",
            type: "Compra",
            price: 250000,
            image: 'https://lh3.googleusercontent.com/proxy/UIb2DRBhETi1XYSPGKEQKYwHswxB_7z-ITwGig0TwwBscSBB4HvHU09TEQVUJoOxgAX0tOiM1aQUODcjfqZhASshtw8m1_8p124mhNORJZO8Znt__HvS2NoDEJmxxmbGMtPQBNXh7R67PgYA'
        },
        {
            id: 8,
            name: "Predio 6",
            type: "Compra",
            price: 250000,
            image: 'https://lh3.googleusercontent.com/proxy/UIb2DRBhETi1XYSPGKEQKYwHswxB_7z-ITwGig0TwwBscSBB4HvHU09TEQVUJoOxgAX0tOiM1aQUODcjfqZhASshtw8m1_8p124mhNORJZO8Znt__HvS2NoDEJmxxmbGMtPQBNXh7R67PgYA'
        }
    ]

   
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.title}>Imóveis</Text>
                <TouchableOpacity style={style.btnSearch} onPress={() => navigation.navigate("Search")}>
                    <Icon name="search" size={25} color="#666"/>
                </TouchableOpacity>
            </View>
            <ScrollView style={{padding:20}}>
                {places.map(p =>(
                    <Places key={p.id} info={p}/>
                ))}
            </ScrollView>
        </View>
    )
}