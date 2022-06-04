import React from "react";
import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartShopping, faHouse, faPlus, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Image, Text, View } from "react-native";


type Props = {
    name: string
}

export const TabBarIcon = ({name}: Props) => {
    
    let icon: IconDefinition = faHouse;
    let active = false;
    
    switch(name){
        case 'Home':
            icon = faHouse;
            active = true;
        break;
        case 'Carrinho':
            icon = faCartShopping;
            active = true;
        break;
        case 'Perfil':
            icon = faUser;
            active = true;
        break;
    }

    return (
        <C.Container>
            <FontAwesomeIcon icon={icon} style={{minWidth: icon == faUser? 20 : 24, minHeight: 22, color: active ? "#00f" : "#0f0"}}/>
        </C.Container>
    );
}