import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import TodoApp from './Screens/todoapp';
import HomeScreen from './Screens/homescreen';

const Tab = createBottomTabNavigator();
const tabNavigationIcon = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused
        ? 'home'
        : 'home-outline';
    } else if (route.name === 'TodoApp') {
      iconName = focused ? 'list' : 'list-outline';
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'coral',
  tabBarInactiveTintColor: 'gray',
});

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={tabNavigationIcon}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="TodoApp" component={TodoApp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
