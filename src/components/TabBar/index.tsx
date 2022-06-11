import React, { useEffect, useState } from "react";
import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartShopping, faHouse, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Keyboard } from "react-native";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'
import { useAppSelector } from "../../redux/hooks/useAppSelector";


export const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
    const [visible, setVisible] = useState(true);
    let badgeCount = useAppSelector(state => state.cartReducer.totalItems)

    useEffect(() => {
        const show = Keyboard.addListener("keyboardDidShow", () => {
            setVisible(false);
        });
        const hide = Keyboard.addListener("keyboardDidHide", () => {
            setVisible(true);
        });

        return () => {
            show.remove();
            hide.remove();
        };
    }, []);
    
    return (
        <C.Container>
            {visible &&
                state.routes.map((route: any, index: any) => {
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
                        case 'Auth':
                            icon = faUser;
                        break;
                    }

                    return  (
                        <C.TabButton onPress={handlePressTab} key={index} activeOpacity={1} underlayColor='transparent'> 
                            <C.BadgeArea>
                                <FontAwesomeIcon icon={icon} style={{minWidth: icon == faUser? 20 : 24, minHeight: 22, color: isActive ? "#000" : "rgba(0, 0, 0, .35)"}}/>  
                                {route.name == 'Cart' && badgeCount > 0 &&
                                    <C.CartBadge>
                                        <C.BadgeAmount>{badgeCount}</C.BadgeAmount>
                                    </C.CartBadge>
                                }
                            </C.BadgeArea>
                        </C.TabButton>
                    );
                })
            }
        </C.Container>
    );
}