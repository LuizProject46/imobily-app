
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from "./views/Home";
import Search from "./views/Search";
import NewImobily from './views/NewImobily'
import Profile from './views/Profile'
import Login from './views/Login'
import Step2 from './views/NewImobily/Step2'
import Step3 from './views/NewImobily/Step3'
import { StyleSheet, View } from 'react-native'

const {Navigator,Screen} = createBottomTabNavigator()
const StackNavigator = createStackNavigator()

function Tabs(){
    return (
        <Navigator screenOptions={({route}) => ({
              
            tabBarIcon: ({color,size}) => {
              let iconName
              switch (route.name) {
                  case 'Home':
                      iconName = 'home';
                      break;
                  case 'NewImobily':
                      iconName = 'plus';
                      break;
                  case 'Profile':
                      iconName = 'user';
                      break;
                  default:
                      iconName = 'circle';
                  break;
              }
  
              return <Icon name={iconName} size={size} color={color} />;
            }


          })
          
          
      }  
      tabBarOptions={{
          activeTintColor: '#fc6b03',
          inactiveTintColor: '#777',
          showLabel: false,
          inactiveBackgroundColor: '#f5f5f5',
          activeBackgroundColor: '#f5f5f5',
         
          
          
      }}
      
      >
            
            <Screen name="Home" component={Home}/>
            {/* <Screen name="Search" component={Search}/> */}
            <Screen name="NewImobily" component={NewImobily} 
            options={() => ({
                tabBarIcon: ({tintColor}) => (
                    <View style={styles.btnAdd}> 
                        <Icon name="plus" size={26} color='#FFF'/>
                    </View>
                ),
            })}
            
            />
            <Screen name="Profile" component={Profile}/>
            
        </Navigator>
    )
}


export default function Routes(){
    return (
        <NavigationContainer>
                <StackNavigator.Navigator initialRouteName="Login">
                <StackNavigator.Screen name="Tabs" options={{headerShown: false}} component={Tabs}/>
                <StackNavigator.Screen name="Login" options={{headerShown: false}} component={Login}/>
                <StackNavigator.Screen name="Step2" options={{
                    headerTitle: 'Selecione o Endereço',
                    headerTintColor: '#fc6b03'
                }} component={Step2}/>
                 <StackNavigator.Screen name="Step3" options={{
                    headerTitle: 'Escolha as fotos',
                    headerTintColor: '#fc6b03'
                }} component={Step3}/>
                <StackNavigator.Screen name="Search" component={Search} options={{
                     headerTitle: 'Buscar Casas e Apartamentos',
                     headerTintColor: '#fc6b03'
                }}/>
                
            </StackNavigator.Navigator>
          
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    btnAdd:{
        backgroundColor: '#fc6b03',
        padding: 20,
        borderRadius: 25,
        elevation: 6,
        marginBottom: 25
    }
})