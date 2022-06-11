import * as C from './styles'
import React, { MutableRefObject, useRef, useState } from "react";
import { ActivityIndicator, Alert, Platform } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { setEmail, setName, setToken, setTypeAuth } from '../../redux/reducers/userReducer';
import { api } from '../../api';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../RootStackPrams';


type screenProp = NativeStackNavigationProp<RootStackParamList, 'Preload'>;

export const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const emailRef: MutableRefObject<any> = useRef();
    const passwordRef: MutableRefObject<any> = useRef();
    const passwordConfirmRef: MutableRefObject<any> = useRef();

    const navigation = useNavigation<screenProp>();
    const dispatch = useAppDispatch();

    const handleSignUp = async () => {// regex email?
        if (userName && userEmail && password.length >= 6 && passwordConfirm && (password && passwordConfirm)) {
            setLoading(true);
            const res = await api.signUp(userEmail, password);
            const token = await auth().currentUser?.getIdToken();
            setLoading(false);

            if (res) {
                dispatch(setToken(token ? token : res.user.uid));
                //criar hash para o id baseado no uid e email?
                // dispatch(setId(userInfo.user.uid)) 
                dispatch(setName(userName))
                dispatch(setEmail(userEmail))
                dispatch(setTypeAuth('email'));
                navigation.navigate('Preload');
            } else {
                // da um jeito de pegar o erro e exibir aq pra n exibir na api
                Alert.alert('Erro', '')
            }            
        } else if ((password != passwordConfirm) || password.length <= 6 || passwordConfirm.length <= 6 ){
            Alert.alert('Dados incorretos!', 'As senhas devem ser iguais e ter pelo menos 6 caracteres.');
        }
    }

    return(
        <C.Container>
            <C.KeyboardArea behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
                <C.InputAreaView>
                    <C.InputLabel>Nome Completo:</C.InputLabel>
                    <C.InputText 
                        returnKeyType='next'
                        blurOnSubmit={false}
                        value={userName}
                        onChangeText={t => setUserName(t)}
                        onSubmitEditing={() => emailRef.current.focus()}
                        editable={!loading}
                    />
                </C.InputAreaView>
                <C.InputAreaView>
                    <C.InputLabel>Email:</C.InputLabel>
                    <C.InputText 
                        ref={emailRef}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        value={userEmail}
                        onChangeText={t => setUserEmail(t)}
                        keyboardType = 'email-address'
                        onSubmitEditing={() => passwordRef.current.focus()}
                        editable={!loading}
                    />
                </C.InputAreaView>
                <C.InputAreaView>
                    <C.InputLabel>Senha:</C.InputLabel>
                    <C.InputText 
                        ref={passwordRef}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        value={password}
                        onChangeText={t => setPassword(t)}
                        secureTextEntry={true}
                        onSubmitEditing={() => passwordConfirmRef.current.focus()}
                        editable={!loading}
                    />
                </C.InputAreaView>
                <C.InputAreaView>
                    <C.InputLabel>Confirme a Senha:</C.InputLabel>
                    <C.InputText 
                        ref={passwordConfirmRef}
                        value={passwordConfirm}
                        onChangeText={t => setPasswordConfirm(t)}
                        secureTextEntry={true}
                        editable={!loading}
                    />
                </C.InputAreaView>
            
                <C.SignUpButton
                    activeOpacity={0.7}
                    onPress={handleSignUp}
                >
                    <C.TextButton>Cadastrar-se</C.TextButton>
                </C.SignUpButton>
            </C.KeyboardArea>
            {loading &&
                <C.LoadingArea>
                    <ActivityIndicator size='large' color='#fff'/>
                </C.LoadingArea>
            }
        </C.Container>
    );
}