import * as C from './styles'
import React, { useEffect, useState } from "react";
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { ItemWithQuantity } from '../../types/ItemWithQuantity';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

export const ConfirmedOrder = () => {
    const lastOrder = useAppSelector(state => state.orderReducer) //alterar pro ultimo index
    const [validImg, setValidImg] = useState(true);

    useEffect(()=> {
        console.log(lastOrder.allOrders.length)
    }, [])

    return (
        <C.Container>
            <C.ScrollViewArea>
                {lastOrder.allOrders[lastOrder.allOrders.length-1].items.length > 0 &&
                    <C.CartItemsView>
                        {lastOrder.allOrders[lastOrder.allOrders.length-1].items.map((item: ItemWithQuantity, index: number) => (
                            <C.ProductItemView key={index}>
                                <C.ImageView>
                                    <C.ImageItem 
                                        onError={() => setValidImg(false)}
                                        // source={validImg? {uri: item.thumbnailHd} : (require('./../../assets/images/default_item.png'))}
                                        source={{uri: item.thumbnailHd}}
                                        isValid={validImg}
                                    />
                                </C.ImageView>
        
                                <C.InfoView>
                                    <C.TopInfo>
                                        <C.Title>{item.title}</C.Title>
                                        <C.FinalPrice>R$ {item.price.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</C.FinalPrice>
                                    </C.TopInfo>
                                    <C.BottomInfo>
                                        <C.BottomText>Vendedor: {item.seller}</C.BottomText>
                                        <C.BottomText>CEP: {item.zipcode}</C.BottomText>
                                        <C.BottomText>Quantidade: {item.quantity}</C.BottomText>
                                    </C.BottomInfo>
                                </C.InfoView>
                            </C.ProductItemView>
                        ))}
                    </C.CartItemsView>
                }
                <C.ConfirmView>
                    <C.ConfirmTitle>Pedido confirmado! <FontAwesomeIcon icon={faSquareCheck}/>
                        
                    </C.ConfirmTitle>
                    <C.AmountInfo>
                        <C.ConfirmText>Total</C.ConfirmText>
                        <C.ConfirmPrice>
                            {(lastOrder.allOrders[lastOrder.allOrders.length-1].totalPrice + 29.00).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                        </C.ConfirmPrice>
                    </C.AmountInfo>
                </C.ConfirmView>
            </C.ScrollViewArea>
        </C.Container>
    );
}