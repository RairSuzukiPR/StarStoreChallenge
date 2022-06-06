import * as C from './styles'
import React, { useState } from "react";
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { changeItemQuantity, removeAllItems, removeItem } from '../../redux/reducers/cartReducer';
import { ItemWithQuantity } from '../../types/ItemWithQuantity';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';



export const Cart = () => {
    const [validImg, setValidImg] = useState(true);
    const cart = useAppSelector(state => state.cartReducer)
    const dispatch = useAppDispatch();


    return(
        <C.Container numItems={cart.totalItems}>
            {cart.totalItems > 0 &&
                <C.ScrollViewArea>
                    <C.CartItemsView>
                        {cart.items.map((item: ItemWithQuantity, index: number) => (
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
                                        <C.Price>R$ {item.price}</C.Price>
                                    </C.TopInfo>
                                    <C.BottomInfo>
                                        <C.Seller>Vendedor: {item.seller}</C.Seller>
                                        <C.ZipCode>CEP: {item.zipcode}</C.ZipCode>
                                        <C.QuantityView>
                                            <C.QuantityIconArea 
                                                activeOpacity={0.7}
                                                onPress={() => item.quantity > 1 ? dispatch(changeItemQuantity({item, operation: '-'})) : dispatch(removeItem(item))}
                                            >
                                                <FontAwesomeIcon icon={faMinus} style={{}}/>
                                            </C.QuantityIconArea>
                                            <C.Quantity>{item.quantity}</C.Quantity>
                                            <C.QuantityIconArea 
                                                activeOpacity={0.7}
                                                onPress={() => dispatch(changeItemQuantity({item, operation: '+'}))}
                                            >
                                                <FontAwesomeIcon icon={faPlus} style={{}}/>
                                            </C.QuantityIconArea>
                                        </C.QuantityView>
                                    </C.BottomInfo>
                                </C.InfoView>
                            </C.ProductItemView>
                        ))}
                    </C.CartItemsView>

                    <C.ZipCodeView>
                        <C.RowItems>
                            <C.TextField>CEP</C.TextField>
                            <C.ZipCodeInput 
                                placeholder="XXXXX-XXX" 
                                keyboardType="numeric"
                            />
                        </C.RowItems>
                    </C.ZipCodeView>

                    <C.PurchaseResumeView>
                        <C.RowItems>
                            <C.TextField>Subtotal</C.TextField>
                            <C.Price>R$ {cart.totalPrice.toFixed(2)}</C.Price>
                        </C.RowItems>
                        <C.RowItems>
                            <C.TextField>Frete</C.TextField>
                            <C.Price>R$ 29.99</C.Price>
                        </C.RowItems>
                        <C.Line></C.Line>
                        <C.RowItems>
                            <C.TextField>Total</C.TextField>
                            <C.Price>R$ {(cart.totalPrice + 29.99).toFixed(2)}</C.Price>
                        </C.RowItems>
                    </C.PurchaseResumeView>

                    <C.GoToPaymentBtn
                        activeOpacity={0.7}
                    >
                        <C.BtnText>Ir para o pagamento</C.BtnText>
                    </C.GoToPaymentBtn>
                </C.ScrollViewArea>
            }
            {
                cart.totalItems == 0 &&
                <C.NoItemsView>
                    <FontAwesomeIcon icon={faCartShopping} style={{color: 'rgba(0, 0, 0, 0.35)', minWidth: 60, minHeight: 60}}/>
                    <C.NoItemsMessage>Seu carrinho está vazio</C.NoItemsMessage>
                </C.NoItemsView>
            }
        </C.Container>
    );
}