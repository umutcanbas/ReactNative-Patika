import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MemberResult = ({route}) => {
  const {info} = route.params;
  return (
    <View>
      <Text style={styles.message}>Kayıt Tamamlandı! </Text>
      <Text style={styles.label}>Üye Adı:{info.userName} </Text>
      <Text style={styles.label}>Üye Soyadı: {info.userSurname}</Text>
      <Text style={styles.label}>Üye Yaşı: {info.userAge}</Text>
      <Text style={styles.label}>Üye E-Postası: {info.userMail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 5,
  },
  message:{
    fontWeight:"bold",
    fontSize:50,
    textAlign:"center"
  }
});

export default MemberResult;
