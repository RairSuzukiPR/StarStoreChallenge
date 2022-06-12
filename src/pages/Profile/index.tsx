import * as C from './styles'
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationArrow, faRightFromBracket, faTruck, faUserPen, faWallet } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../RootStackPrams';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { api } from '../../api';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { resetUser } from '../../redux/reducers/userReducer';
import { LoadingArea } from '../../components/LoadingArea';
import { resetAllOrders } from '../../redux/reducers/orderReducer';


type ScreenProp = NativeStackNavigationProp<RootStackParamList, 'OrderHistoryScreen'>;

export const Profile = () => {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<ScreenProp>();
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.userReducer)

    const handleLogout = async () => {
        setLoading(true);
        const res = await api.signOut(user.typeAuth);
        setLoading(false);

        if (res) {
            dispatch(resetUser());
            dispatch(resetAllOrders()); //apagar ?
            navigation.navigate('Preload');
        }
    }

    return(
        <C.Container>
            <C.OptionsView>
                <C.OptionButton
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('OrderHistoryScreen')}
                >
                    <FontAwesomeIcon icon={faTruck} style={{minWidth: 18, minHeight: 18}}/>  
                    <C.OptionButtonText>Histórico de compras</C.OptionButtonText>
                </C.OptionButton>
                <C.OptionButton
                    activeOpacity={0.7}
                >
                    <FontAwesomeIcon icon={faUserPen} style={{minWidth: 18, minHeight: 18}}/>   
                    <C.OptionButtonText>Editar Perfil</C.OptionButtonText>
                </C.OptionButton>
                <C.OptionButton
                    activeOpacity={0.7}
                >
                    <FontAwesomeIcon icon={faWallet} style={{minWidth: 18, minHeight: 18}}/>  
                    <C.OptionButtonText>Carteira</C.OptionButtonText>
                </C.OptionButton>
                <C.OptionButton
                    activeOpacity={0.7}
                >
                    <FontAwesomeIcon icon={faLocationArrow} style={{minWidth: 18, minHeight: 18}}/>  
                    <C.OptionButtonText>Endereços</C.OptionButtonText>
                </C.OptionButton>
            </C.OptionsView>
            <C.LogoutArea
                activeOpacity={0.7}
                onPress={handleLogout}
            >   
                <C.LogoutText>Logout</C.LogoutText>
                {/* <C.LogoutButton
                    activeOpacity={0.7}
                    onPress={handleLogout}
                > */}
                    <FontAwesomeIcon icon={faRightFromBracket} style={{minWidth: 18, minHeight: 18}}/>
                {/* </C.LogoutButton> */}
            </C.LogoutArea>
            {loading &&
                <LoadingArea />
            }
        </C.Container>
    );
}