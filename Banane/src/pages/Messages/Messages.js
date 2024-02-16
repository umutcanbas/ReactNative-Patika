import {SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from './Messages.style';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import ContentInputModal from '../../components/modal/Modal';
import parseContentData from '../../utils/parseContentData';
import MessagCard from '../../components/MessageCard/MessagCard';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    senContent(content);
  }

  function senContent(content) {
    const userMail = auth().currentUser.email;

    const contentObj = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
      dislike: 0,
    };
    database().ref('messages/').push(contentObj);
  }
  function handleBanane(item) {
    database()
      .ref(`messages/${item.id}/`)
      .update({dislike: item.dislike + 1});
  }

  const renderContent = ({item}) => {
    return <MessagCard message={item} onBanane={() => handleBanane(item)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />

      <FloatingButton onPress={handleInputToggle} />

      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Messages;
