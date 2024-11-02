
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0p1EFzZQeTDgcHo2Yb7EmN69ibeT6nIY",
  authDomain: "socialapp-74f35.firebaseapp.com",
  projectId: "socialapp-74f35",
  storageBucket: "socialapp-74f35.appspot.com",
  messagingSenderId: "154768462295",
  appId: "1:154768462295:web:d2ffa9ba78c40c089c3b92"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const storage = getStorage(app);
// export const auth = getAuth(app);
