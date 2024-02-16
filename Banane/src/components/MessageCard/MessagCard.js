import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import styles from './MessageCard.style';

import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

const MessagCard = ({message, onBanane}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.username} </Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.title}>{message.text}</Text>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.dislike_container} onPress={onBanane}>
          {!!message.dislike && (
            <View style={styles.dislike_count_container}>
              <Text style={styles.dislike_count_text}>{message.dislike}</Text>
            </View>
          )}
          <Text style={styles.dislike_text}>banane?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessagCard;
