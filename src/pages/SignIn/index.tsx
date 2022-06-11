import React, { useState } from 'react';
import { Alert } from 'react-native';
import { api } from '../../api';
import { Platform } from 'react-native';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { setId, setToken, setEmail, setName, setTypeAuth } from '../../redux/reducers/userReducer';
import * as C from './styles';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../RootStackPrams';


type screenProp = NativeStackNavigationProp<RootStackParamList, 'PaymentScreen'>;

export const SignIn = () => { //usar ref,
    const [emailInput, setEmailInput] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<screenProp>();

    const dispatch = useAppDispatch();

    const handleCommonLogin = async () => {
        if(emailInput && password){
            const res: any = await api.signIn(emailInput, password);
            
            if (res.error) {
                Alert.alert(res.error);
            } else {
                dispatch(setToken(res.token))
                dispatch(setId(res.id))
                dispatch(setName(res.name))
                dispatch(setEmail(emailInput))
                navigation.navigate('Preload');
            }
        }
    }

    const handleGoogleLogin = async () => {
        GoogleSignin.configure({
            webClientId: '821595541020-pj9ee2d6tcc7lcphk5n8udh12bok9bgt.apps.googleusercontent.com',
        });
        const{user, googleCredential} = await api.signInWithGoogleAsync();

        if(user && googleCredential){
            dispatch(setToken(googleCredential.token));
            //criar hash para o id baseado no uid e email?
            // dispatch(setId(userInfo.user.uid)) 
            dispatch(setName(user.user.displayName ? user.user.displayName: 'error' ))
            dispatch(setEmail(user.user.email ? user.user.email : 'error'))
            dispatch(setTypeAuth('google'));
            navigation.navigate('Preload');
        } else {
            Alert.alert('Erro', 'Algo inesperado aconteceu, tente novamente.');
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
                    />
                </C.InputAreaView>
                <C.InputAreaView>
                    <C.InputLabel>Senha:</C.InputLabel>
                    <C.InputText 
                        value={password}
                        onChangeText={t => setPassword(t)}
                        secureTextEntry={true}
                    />
                </C.InputAreaView>
            
                <C.LoginButton
                    onPress={handleCommonLogin}
                >
                    <C.TextButton>Login</C.TextButton>
                </C.LoginButton>

                <C.LoginOptions>
                    <C.LoginOpt
                        // onPress={signInWithGoogleAsync}
                        onPress={handleGoogleLogin}
                    >
                        <C.IconView>
                            <FontAwesomeIcon icon={faGoogle} style={{color: '#DB4437'}}/>
                        </C.IconView>
                        <C.LabelText>Login com Google</C.LabelText>
                    </C.LoginOpt>
                    <C.LoginOpt>
                        <C.IconView>
                            <FontAwesomeIcon icon={faFacebook} style={{color: '#4267B2'}}/>
                        </C.IconView>
                        <C.LabelText>Login com Facebook</C.LabelText>
                    </C.LoginOpt>
                    <C.LoginOpt>
                        <C.IconView>
                            <FontAwesomeIcon icon={faApple} style={{color: '#555555'}}/>
                        </C.IconView>
                        <C.LabelText>Login com Apple</C.LabelText>
                    </C.LoginOpt>
                </C.LoginOptions>
                {/* <ActivityIndicator size="large" color="#fff" /> */}
                {/* <Button 
                    title="Sign out"
                    onPress={signOut}
                />  */}
            </C.KeyboardArea>
        </C.Container>
    );
}