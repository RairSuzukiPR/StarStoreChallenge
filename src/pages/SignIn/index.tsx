import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { api } from '../../api';
import { Platform } from 'react-native';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { setUser } from '../../redux/reducers/userReducer';
import * as C from './styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../RootStackPrams';
import { MutableRefObject } from 'react-test-renderer/node_modules/@types/react';
import { LoadingArea } from '../../components/LoadingArea';
import { setAllOrders } from '../../redux/reducers/orderReducer';


type screenProp = NativeStackNavigationProp<RootStackParamList, 'Preload'>;

export const SignIn = () => { 
    const [loading, setLoading] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef: MutableRefObject<any> = useRef();

    const navigation = useNavigation<screenProp>();
    const dispatch = useAppDispatch();


    const handleEmailLogin = async () => {
        if(emailInput && password){
            setLoading(true);
            const res = await api.signInWithEmail(emailInput, password);;
            const token = await auth().currentUser?.getIdToken();
            setLoading(false);
            
            if (res) {
                dispatch(setUser({
                    id: res.user.uid,
                    name: emailInput.substring(0, emailInput.lastIndexOf("@")),
                    email: emailInput,
                    token: token ? token : res.user.uid,
                    typeAuth: 'email'
                }))
                updateCache(res.user.uid);
                navigation.navigate('Preload');
            } else {
                Alert.alert('Erro', '')
            }
            
        }
    }

    const handleGoogleLogin = async () => {
        setLoading(true);
        GoogleSignin.configure({
            webClientId: '821595541020-pj9ee2d6tcc7lcphk5n8udh12bok9bgt.apps.googleusercontent.com',
        });
        const{user, googleCredential} = await api.signInWithGoogleAsync();
        setLoading(false);

        if(user && googleCredential){
            dispatch(setUser({
                id: user.user.uid, 
                name: user.user.displayName ? user.user.displayName: emailInput.substring(0, emailInput.lastIndexOf("@")),
                email: user.user.email ? user.user.email : emailInput,
                token: googleCredential.token,
                typeAuth: 'google'
            }))
            updateCache(user.user.uid);
            navigation.navigate('Preload');
        } else {
            Alert.alert('Erro', 'Algo inesperado aconteceu, tente novamente.');
        }
    }

    const handleFacebookLogin = async () => {
        setLoading(true)
        const res = await api.signInWithFacebook();
        const token = await auth().currentUser?.getIdToken();
        setLoading(false)

        if (res) {
            dispatch(setUser({
                id: res.user.uid,
                name: res.user.displayName ? res.user.displayName : '',
                email: res.user.email ? res.user.email : '',
                token: token ? token : res.user.uid,
                typeAuth: 'facebook'
            }))
            updateCache(res.user.uid);
            navigation.navigate('Preload');
        }
        
    }

    const updateCache = async (userId: string) => {
        const orders = await api.getOrdersFromFirebase(userId);
        if (orders){
            dispatch(setAllOrders(orders))
        }
    }

    return(
        <C.Container>
            <C.KeyboardArea behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
                <C.InputAreaView>
                    <C.InputLabel>Email:</C.InputLabel>
                    <C.InputText 
                        value={emailInput}
                        onChangeText={t => setEmailInput(t)}
                        keyboardType = 'email-address'
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => passwordRef.current.focus()}
                        editable={!loading}
                    />
                </C.InputAreaView>
                <C.InputAreaView>
                    <C.InputLabel>Senha:</C.InputLabel>
                    <C.InputText 
                        ref={passwordRef}
                        value={password}
                        onChangeText={t => setPassword(t)}
                        secureTextEntry={true}
                        editable={!loading}
                    />
                </C.InputAreaView>
            
                <C.LoginButton
                    onPress={handleEmailLogin}
                >
                    <C.TextButton>Login</C.TextButton>
                </C.LoginButton>
                
                <C.SignUpBtn
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('SignUpScreen')}
                >
                    <C.SignUpBtnText>Cadastrar-se</C.SignUpBtnText>
                </C.SignUpBtn>
                
                <C.LabelText>Ou faça login com:</C.LabelText>
                <C.LoginOptions>
                    <C.LoginOpt
                        onPress={handleGoogleLogin}
                    >
                        <C.IconView>
                            <FontAwesomeIcon icon={faGoogle} style={{color: '#DB4437'}}/>
                        </C.IconView>
                    </C.LoginOpt>
                    <C.LoginOpt
                        onPress={handleFacebookLogin}
                    >
                        <C.IconView>
                            <FontAwesomeIcon icon={faFacebook} style={{color: '#4267B2'}}/>
                        </C.IconView>
                    </C.LoginOpt>
                    {/* <C.LoginOpt>
                        <C.IconView>
                            <FontAwesomeIcon icon={faApple} style={{color: '#555555'}}/>
                        </C.IconView>
                    </C.LoginOpt> */}
                </C.LoginOptions>
            </C.KeyboardArea>
            {loading &&
                <LoadingArea bgColor='default' indicatorColor='#fff'/>
            }

        </C.Container>
    );
}