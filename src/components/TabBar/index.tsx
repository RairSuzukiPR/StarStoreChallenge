import React from "react";
import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartShopping, faHouse, faPlus, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Image, Text, View } from "react-native";


export const TabBar = ({state, descriptors, navigation}: any) => {

    return (
        <C.Container>
            {state.routes.map((route: any, index: any) => {
                const isActive = state.index === index;

                const handlePressTab = () => {
                    navigation.navigate(route.name);
                }

                let icon: IconDefinition = faHouse;
                switch(route.name){
                    case 'Home':
                        icon = faHouse;
                    break;
                    case 'Cart':
                        icon = faCartShopping;
                    break;
                    case 'Profile':
                        icon = faUser;
                    break;
                }

                return (
                    <C.TabButton onPress={handlePressTab} key={index} activeOpacity={1} underlayColor='transparent'>
                        <FontAwesomeIcon icon={icon} style={{minWidth: icon == faUser? 20 : 24, minHeight: 22, color: isActive ? "#000" : "rgba(0, 0, 0, .35)"}}/>
                    </C.TabButton>
                );
            })}
        </C.Container>
    );
}