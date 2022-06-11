import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export const api = {
    getItems: async () => {
        const res = await fetch("https://raw.githubusercontent.com/stone-pagamentos/desafio-mobile/master/store/products.json");
        const json = await res.json();
        
        return json;
    },
    signIn: (email: string, password: string) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let json = {
                    error: '',
                    id: 1,
                    token: '123',
                    name: 'João'
                };

                resolve(json);
            }, 1000);
        })
    },
    signUp: (name: string, email: string, password: string) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let json = {
                    error: '',
                    token: ''
                };
                if (email == 'erro@hotmail.com') {
                    json.error = 'Email já existe!'
                } else {
                    json.token = '123';
                }

                resolve(json);
            }, 1000);
        })
    },
    signInWithGoogleAsync: async () => {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const user = await auth().signInWithCredential(googleCredential);

        return {user, googleCredential};
    },
    signOut: async (typeAuth: string) => {
        console.log(typeAuth)
        if (typeAuth == 'google') {
            auth().signOut().then(()=> {
                console.log('user signed out')
            })
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            return true;
        }
    }
}