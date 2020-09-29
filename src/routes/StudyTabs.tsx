import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { useSafeArea } from 'react-native-safe-area-context'
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const {Navigator, Screen } = createBottomTabNavigator();

function StudyTabs(){
  const insets = useSafeArea();
  return(
    <Navigator
      tabBarOptions={{
        safeAreaInsets: { bottom: 0, top: 0 },
        style:{
          elevation: 0,
          shadowOpacity: 0,
          height: 64 + (insets.bottom/2),
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          paddingBottom: insets.bottom,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle:{
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen 
        name='TeacherList' 
        component={TeacherList}
        options={{
          tabBarLabel:'Proffys',
          tabBarIcon: ({color, size, focused})=>{
            return(
              <Ionicons name='ios-easel' color={focused ? '#8257e5' : color} size={size} />
            )
          }
        }}
      />
      <Screen 
        name='Favorites' 
        component={Favorites}
        options={{
          tabBarLabel:'Favoritos',
          tabBarIcon: ({color, size, focused})=>{
            return(
              <Ionicons name='ios-heart' color={focused ? '#8257e5' : color} size={size} />
            )
          }
        }}
      />
    </Navigator>
  )
}

export default StudyTabs;