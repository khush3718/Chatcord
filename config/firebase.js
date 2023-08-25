// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDtMbkgQZJwNd2QusQqmBX_YkpoTNXFWOI",
  authDomain: "chatcord-af03b.firebaseapp.com",
  projectId: "chatcord-af03b",
  storageBucket: "chatcord-af03b.appspot.com",
  messagingSenderId: "850003131445",
  appId: "1:850003131445:web:8cf64820b08ae20e59057c",
  measurementId: "G-S4YGRTYP66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);