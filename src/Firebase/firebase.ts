import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvide = new FacebookAuthProvider();

const signInWithGoogle = async (): Promise<any | void> => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        return user;
    } catch (err) {
        console.error({ err });
        return err;
    }
};

const signInWithFacebook = async (): Promise<any | void> => {
    try {
        const res = await signInWithPopup(auth, facebookProvide);
        const user = res.user;
        return user;
    } catch (err) {
        console.error({ err });
        return err;
    }
};

const handleLogout = (): void => {
    signOut(auth)
        .then((res) => {
            console.log({ res });
        })
        .catch((err) => {
            console.log({ err });
        });
};

export { app, auth, signInWithGoogle, signInWithFacebook, handleLogout };
console.log(app);
