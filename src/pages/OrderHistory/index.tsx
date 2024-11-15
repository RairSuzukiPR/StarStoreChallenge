import * as C from './styles'
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../RootStackPrams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';



type OrderItemScreenProp = NativeStackNavigationProp<RootStackParamList, 'OrderItemScreen'>;

export const OrderHistory = () => {
    const orders = useAppSelector(state => state.orderReducer.allOrders)
    const navigation = useNavigation<OrderItemScreenProp>();


    return(
        <C.Container isEmpty={orders.length == 0}>
            {orders.length != 0 &&
                orders.length > 0 && 
                    <C.ScrollViewArea>
                    {orders.map((order: any, index: number) => (
                        <C.OrderItemView key={index}
                            activeOpacity={0.7}
                            onPress={() => navigation.navigate('OrderItemScreen', {index})}
                        >
                            <C.LeftInfoView>
                                <C.TitleText>Pedido #{index+1}</C.TitleText>
                                <C.InfoText>Valor: {(order.totalPrice+29).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</C.InfoText>
                                <C.InfoText>Status: Pedido Confirmado</C.InfoText>
                            </C.LeftInfoView>
                            <C.RightInfoView>
                                <C.ShowFullOrderView>
                                    <FontAwesomeIcon icon={faAngleRight} style={{minWidth: 18, minHeight: 18}}/>
                                </C.ShowFullOrderView>
                            </C.RightInfoView>
                        </C.OrderItemView>
                    ))}
                    <C.FixView></C.FixView>
                </C.ScrollViewArea>
                
            }
            {orders.length == 0 && 
                <C.InfoText>Você ainda não possui compras.</C.InfoText>
            }
        </C.Container>
    );
}
