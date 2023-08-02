import * as Notifications from 'expo-notifications';
import { dbc } from './ClientSide';

// Function to send a push notification
const sendPushNotification = async (userDisplayName, status) => {
  const notification = {
    title: userDisplayName,
    body: status,
  };

  await Notifications.scheduleNotificationAsync({
    content: notification,
    trigger: null,
  });
};

// Function to listen for new document additions in a collection
const listenForNewDocuments = () => {

  dbc.collection("DotDotOrders").onSnapshot((querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const { userDisplayName, status } = change.doc.data();
        // Call the function to send a push notification
        sendPushNotification(userDisplayName, status);
      }
    });
  });
};

export { listenForNewDocuments };
