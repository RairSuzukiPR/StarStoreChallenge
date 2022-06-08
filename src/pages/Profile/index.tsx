import * as C from './styles'
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../RootStackPrams';


type OrderHistoryScreenProp = NativeStackNavigationProp<RootStackParamList, 'OrderHistoryScreen'>;

export const Profile = () => {
    const [isLogged, setIsLogged] = useState(true);
    const navigation = useNavigation<OrderHistoryScreenProp>();

    return(
        <C.Container>
            {isLogged &&
            <>
                <C.OptionsView>
                    <C.OptionButton
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('OrderHistoryScreen')}
                    >
                        <C.OptionButtonText>Historico de compras</C.OptionButtonText>
                    </C.OptionButton>
                    <C.OptionButton
                        activeOpacity={0.7}
                    >
                        <C.OptionButtonText>Editar Perfil</C.OptionButtonText>
                    </C.OptionButton>
                    <C.OptionButton
                        activeOpacity={0.7}
                    >
                        <C.OptionButtonText>Carteira</C.OptionButtonText>
                    </C.OptionButton>
                    <C.OptionButton
                        activeOpacity={0.7}
                    >
                        <C.OptionButtonText>Endereços</C.OptionButtonText>
                    </C.OptionButton>
                </C.OptionsView>
                <C.LogoutView>
                    <C.LogoutText>Logout</C.LogoutText>
                    <C.LogoutButton
                        activeOpacity={0.7}
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} style={{minWidth: 18, minHeight: 18}}/>
                    </C.LogoutButton>
                </C.LogoutView>
            </>
            }
            {!isLogged &&
            <>
                <C.LoginView>
                    <C.InputAreaView>
                        <C.InputLabel>Email:</C.InputLabel>
                        <C.InputText 
                            keyboardType = 'email-address'
                        />
                    </C.InputAreaView>
                    <C.InputAreaView>
                        <C.InputLabel>Senha:</C.InputLabel>
                        <C.InputText 
                            secureTextEntry={true}
                        />
                    </C.InputAreaView>
                    <C.LoginButton>
                        <C.TextButton>Login</C.TextButton>
                    </C.LoginButton>
                </C.LoginView>
            </>
            }
        </C.Container>
    );
}