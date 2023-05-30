import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Header } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen.js'
import SettingsScreen from './screens/SettingsScreen.js'
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (<Ionicons name="home" 
              color={color} 
              size={size} /> )
           }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            tabBarIcon: ({color, size}) => (<Ionicons name="settings" 
              color={color}         
              size={size} /> )
           }}
        />
          
        </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
