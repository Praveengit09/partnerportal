// Initialize Firebase App
const firebaseConfig = {
  apiKey: "AIzaSyBa8a7ix1zagfk7k3z7uaRSbeapeXRjlH8",
  authDomain: "mymedic-portal.firebaseapp.com",
  databaseURL: "https://mymedic-portal.firebaseio.com",
  projectId: "mymedic-portal",
  storageBucket: "mymedic-portal.appspot.com",
  messagingSenderId: "297135873595",
  appId: "1:297135873595:web:c07990111daff5f1df861e",
  measurementId: "G-Q5MDRRR407"
}

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-analytics.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
var messaging = firebase.messaging();

// Handle Background Notifications

// If you would like to customize notifications that are received in the background (Web app is closed or not in browser focus) then you should implement this optional method
messaging.setBackgroundMessageHandler(function (payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  // Customize notification here
  let notificationTitle = 'New Notication Message';
  let notificationMessage = '';
  let tmpNotificationData = payload.data.default ? JSON.parse(payload.data.default) : {};
  if (tmpNotificationData && tmpNotificationData.category && tmpNotificationData.category == 10) {
    if (tmpNotificationData.msg && tmpNotificationData.msg.length > 0) {
      notificationMessage = tmpNotificationData.msg;
    }
  } else if (tmpNotificationData && tmpNotificationData.message && tmpNotificationData.message.length > 0) {
    notificationTitle = 'Video Call';
    notificationMessage = tmpNotificationData.message;
  }
  var notificationOptions = {
    body: notificationMessage
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});