import React, { useState } from 'react';
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
          tabBarActiveTintColor: 'tomato', 
          tabBarInactiveTintColor: 'gray', 
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ tabBarBadge: showProfileBadge ? profileBadgeCount:null }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}