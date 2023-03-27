import React, {useState} from 'react';
import {View, Alert} from 'react-native';

import Input from '../componenets/Input/Input';
import Button from '../componenets/Button/Button';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  const handleSubmit = () => {
    if (!userName || !userSurname || !userAge || !userMail) {
      Alert.alert('Kebap Fitness Salonu', 'Bilgiler Boş Bırakılamaz');
      return;
    }
    const info = {
      userName,
      userSurname,
      userAge,
      userMail,
    };
    navigation.navigate('MemberResultScreen', {info});
  };

  return (
    <View>
      <Input
        label="Üye Adı"
        placeholder="Üyenin İsmini Giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye SoyAdı"
        placeholder="Üyenin Soyismini Giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaş"
        placeholder="Üyenin Yaşını Giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-Posta"
        placeholder="Üyenin E-Posta Adresini Giriniz..."
        onChangeText={setUserMail}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </View>
  );
};

export default MemberSign;
