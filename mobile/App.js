import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import Splash1 from './screens/Splash1';
import Splash2 from './screens/Splash2';
import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';
import Splash0 from './screens/Splash0';
import LoginScreen from './screens/GetPharmacy';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash0" component={Splash0} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  padding: 10,
});
