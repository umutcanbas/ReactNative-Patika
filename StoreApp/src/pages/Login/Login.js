import {View, Alert, Image} from 'react-native';
import React, { useEffect } from 'react';
import {Formik} from 'formik';
import Config from 'react-native-config';

import styles from './Login.style.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import usePost from '../../hooks/usePost/usePost.js';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  const URL_AUTH = `https://fakestoreapi.com/auth/login`;

  function handleLogin(values) {

    post(URL_AUTH, values);

     /* post(Config.API_URL_AUTH + '/login' , values)  */

     if (error) {
      Alert.alert('Store', 'Error');
    }
    if (data) {
      if (data.status === 'Error') {
        Alert.alert('Store', 'User not found!');
        console.log(data)
      } else {
        navigation.navigate('ProductPage');
      }
    } 
  }

 
  
  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../asstes/loging-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="User Name"
              value={values.username}
              onType={handleChange('username')}
              IconName="account"
            />

            <Input
              placeholder="Password"
              value={values.password}
              onType={handleChange('password')}
              IconName="key"
              /* isSecure */
            />

            <Button text="Login" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
