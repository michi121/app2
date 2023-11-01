import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ClassesScreen from './screens/ClassesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
        <Stack.Screen name='Classes' component={ClassesScreen} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
