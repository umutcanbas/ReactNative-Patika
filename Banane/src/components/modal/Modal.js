import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';


import styles from './Modal.style';
import Button from '../Button/Button';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = React.useState(null);

  function handleSend() {
    if (!text) {
      return;
    }

    onSend(text);
    setText(null);
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder="Anlat sen seversin"
            onChangeText={setText}
            multiline
          />
          <Button text="Gönder" onPress={() => onSend(text)} />
        </View>
      </View>
    </Modal>
  );
};

export default ContentInputModal;
