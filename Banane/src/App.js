import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import Login from './pages/auth/Login/Login';
import Singin from './pages/auth/Singin/Singin';
import Messages from './pages/Messages/Messages';
import colors from './styles/colors';

const Stack = createNativeStackNavigator();

const App = () => {
  const [userSession, setUserSession] = React.useState();
  const logOut = (
    <TouchableOpacity
      style={{
        backgroundColor: colors.green,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 50,
      }}
      onPress={() => auth().signOut()}>
      <Text style={{color: 'black', fontWeight: 'bold'}}>out</Text>
    </TouchableOpacity>
  );

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SingPage" component={Singin} />
       {/*  <Stack.Screen
          name="MessagePage"
          component={Messages}
          options={{title: 'Dertler', headerTintColor: colors.green}}
        /> */}
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userSession ? (
        <AuthStack />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="MessagePage"
            component={Messages}
            options={{
              title: 'Umrum değil',
              headerTintColor: colors.green,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => logOut,
            }}
          />
        </Stack.Navigator>
      )}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
