// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { Constants } from "expo-constants";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDtMbkgQZJwNd2QusQqmBX_YkpoTNXFWOI",
  authDomain: "chatcord-af03b.firebaseapp.com",
  projectId: "chatcord-af03b",
  storageBucket: "chatcord-af03b.appspot.com",
  messagingSenderId: "850003131445",
  appId: "1:850003131445:web:8cf64820b08ae20e59057c",
  databaseURL: "https://chatcord-af03b-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);