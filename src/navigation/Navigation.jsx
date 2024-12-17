import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen'; 
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import { useBadge } from '../context/BadgeContext';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const { profileBadgeCount, showProfileBadge } = useBadge();
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'tomato', 
          tabBarInactiveTintColor: 'gray', 
          animation: 'shift',
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerTitle: 'Placa',
            headerTitleStyle: {color: 'tomato'}
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            // recordar que quiero que el titulo corresponda al nombre de usuario. Hacerlo dinámico
            headerTitle: 'Perfil',
            headerTitleStyle: {color: 'tomato'},
            tabBarBadge: showProfileBadge ? profileBadgeCount:null,
            tabBarBadgeStyle: {
              color: 'white',
              backgroundColor: 'tomato'
            } 
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            headerTitle: 'Configuraciones',
            headerTitleStyle: {color: 'tomato'}
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}