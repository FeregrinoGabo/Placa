import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen'; 
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CreateScreen from '../screens/CreateScreen';
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
            } else if (route.name === 'Add') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }

            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'tomato', 
          tabBarInactiveTintColor: 'gray', 
          animation: 'fade',
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerTitle: 'Placa',
            headerTitleStyle: styles.headerTitleStyle
          }}
        />
                <Tab.Screen 
          name="Add"
          component={CreateScreen}
          options={{
            headerTitle: 'Crear',
            headerTitleStyle: styles.headerTitleStyle
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            // recordar que quiero que el titulo corresponda al nombre de usuario. Hacerlo dinámico
            headerTitle: 'Perfil',
            headerTitleStyle: styles.headerTitleStyle,
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
            headerTitleStyle: styles.headerTitleStyle
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitleStyle: {
    color: 'tomato', 
    fontFamily: 'Roboto',
    fontSize: 20, 
  },
});
