/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable,View } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Octicons,MaterialCommunityIcons} from '@expo/vector-icons';

import {Fontisto} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatsScreen from '../screens/ChatsScreen';
import ContactsScreen from '../screens/ContactsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, MainTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


import ChatRoomScreen from '../screens/ChatRoomScreen'
import { RotateInUpLeft } from 'react-native-reanimated';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint,
        
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
        
      }
      }}>
      <Stack.Screen
      
        name="Root" 
        component={MainTabNavigator} 

        options={{ 
          title : "WhatsApp",
          
          headerRight:()=>(
            <View style={{flexDirection:'row',width: 60,justifyContent:'space-between',marginRight: 10,}}>
              <Octicons name="search" size={24} color={'white'}/>
              <MaterialCommunityIcons name="dots-vertical" size={24} color={'white'} />
            </View>
            )
      }} />
      <Stack.Screen name="Contacts" 
      component={ContactsScreen} 
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={({route})=>({ 
          title: route.params.name, 
          headerRight:()=>(
            
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
              }}>
              <FontAwesome5 name="video" size={22} color={'white'}/>
              <MaterialIcons name="call" size={22} color={'white'}/>
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'}/>
            </View>
          )
          })} 
          />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle:{
          backgroundColor: Colors[colorScheme].tint,
        },
        tabBarIndicatorStyle :{
          backgroundColor : Colors[colorScheme].background,
          height: 4,
        },
        tabBarLabelStyle:{
          fontWeight:'bold'
        },
        tabBarShowIcon:true,
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color}  size={19}/>,
          tabBarLabel:()=> null 
         }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatsScreen}
       
      />
      <MainTab.Screen
        name="Status"
        component={TabTwoScreen}
        
      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoScreen}
       
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
