import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import styles from './Login.style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import authErrorMessageParse from '../../../utils/authErrorMessageParse';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = () => {
    navigation.navigate('SingPage');
  };

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
        );
        navigation.navigate('MessagePage')
        setLoading(false)
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParse(error.code),
        type: 'warning',
      });
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Bana ne?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onType={handleChange('usermail')}
              values={values.usermail}
              placeholder="e-postanızı giriniz"
            />
            <Input
              onType={handleChange('password')}
              values={values.password}
              placeholder="şifrenizi giriniz"
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default Login;
