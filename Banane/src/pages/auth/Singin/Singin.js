import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import styles from './Singin.style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import authErrorMessageParse from '../../../utils/authErrorMessageParse';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Singin = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);

  const goLoginPage = () => {
    navigation.navigate('LoginPage');
  };

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
      return
    }

    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı Oluşturuldu',
        type: 'success',
      });
      navigation.navigate('LoginPage');
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParse(error.code),
        type: 'danger',
      });
    }

    [console.log(formValues)];
  }

  return (
    <SafeAreaView style={styles.container}>
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
            <Input
              onType={handleChange('repassword')}
              values={values.repassword}
              placeholder="tekrar şifrenizi giriniz"
              isSecure
            />
            <Button
              text="Hesap Oluştur"
              loading={loading}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <Button text="Giriş Sayfasına Geri Dön" onPress={goLoginPage} />
    </SafeAreaView>
  );
};

export default Singin;
