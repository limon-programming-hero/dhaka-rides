import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const SignUpWithEmail = (email, password) => {
    let userInfo = {};

    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user:", user)
            userInfo = { submitFeedback: 'Signed Up successfully!', email: email, password: password }
            console.log('create user Done');
            return userInfo;
        })
        .catch((error) => {
            var errorCode = error.code;
            const errorMessage = error.message;
            userInfo.submitFeedback = errorMessage;
            return userInfo;
        });
}
export const SignInWithEmail = (email, password) => {
    let userInfo = {};
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            console.log("user:", user)
            userInfo = { submitFeedback: 'Signed in successfully!', email: email, password: password }
            console.log('login user Done');
            return userInfo;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            userInfo.submitFeedback = errorMessage;
            console.log(errorMessage);
            return userInfo;
        });
}
export const GooglePopUpSignIn = () => {
    let userInfo = {};

    return signInWithPopup(auth, GoogleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            userInfo = { ...user }
            console.log(user)
            return userInfo;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            userInfo = { submitFeedback: errorMessage };
            return userInfo
            // ...
        });
}