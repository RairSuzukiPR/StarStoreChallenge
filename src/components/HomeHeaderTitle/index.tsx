import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass,  } from '@fortawesome/free-solid-svg-icons';
import * as C from './styles';
import { setInputText } from "../../redux/reducers/homeSearchInputReducer";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";


export const HomeHeaderTitle = () => {
    const dispatch = useAppDispatch();


    return (
        <C.Container>

            <C.TextField>STARSTORE</C.TextField>
            <C.ViewArea>
                <C.TextInputField placeholder="O que você procura?" onChangeText={t => dispatch(setInputText(t))}/>
                <C.Icon>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#C2C2C2"}}/>
                </C.Icon>
            </C.ViewArea>

        </C.Container>
    );
}