import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

export const api = {
    getItems: async () => {
        const res = await fetch("https://raw.githubusercontent.com/stone-pagamentos/desafio-mobile/master/store/products.json");
        const json = await res.json();
        
        return json;
    },
    signUp: async (email: string, password: string) => {
        const res = await auth().createUserWithEmailAndPassword(email, password).then((res) => {
            return res;
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                error = email+" já está em uso!"
            }
            if (error.code === 'auth/invalid-email') {
                error = "Endereço de e-mail inválido!"
            }
            // return {...aux, error: er};
        });
        
        // console.log(res);
        return res;
    },
    signInWithEmail: async (email: string, password: string) => {
        const res = await auth().signInWithEmailAndPassword(email, password).then((res) => {
            return res;
        }).catch((error) => {
            console.log(error)
        })
        
        return res;
    },
    signInWithGoogleAsync: async () => {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const user = await auth().signInWithCredential(googleCredential);
        return {user, googleCredential};
    },
    signInWithFacebook: async () => {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
          throw 'User cancelled the login process';
        }
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
          throw 'Something went wrong obtaining access token';
        }
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        return auth().signInWithCredential(facebookCredential);
    },
    signOut: async (typeAuth: string) => {
        console.log(typeAuth)
        if (typeAuth == 'google') {
            auth().signOut().then(()=> {
                console.log('user signed out from google')
            })
            GoogleSignin.configure({
                webClientId: '821595541020-pj9ee2d6tcc7lcphk5n8udh12bok9bgt.apps.googleusercontent.com',
            });
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            return true;
        }
        if (typeAuth == 'email' || typeAuth == 'facebook') {
            auth().signOut().then(()=> {
                console.log('user signed out from email')
            })
            return true;
        }
    }
}