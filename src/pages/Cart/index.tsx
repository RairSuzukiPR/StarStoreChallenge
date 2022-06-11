import * as C from './styles'
import React, { useEffect, useState } from "react";
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { changeItemQuantity, removeItem } from '../../redux/reducers/cartReducer';
import { ItemWithQuantity } from '../../types/ItemWithQuantity';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../RootStackPrams';
import { RenderImage } from './../../components/RenderImage'


type screenProp = NativeStackNavigationProp<RootStackParamList, 'PaymentScreen'>;

export const Cart = () => {
    const [zipCode, setZipCode] = useState('');
    const cart = useAppSelector(state => state.cartReducer)
    const user = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch();
    const navigation = useNavigation<screenProp>();

    const redirectToPayment = () => {
        if (zipCode.length != 9 ){
            Alert.alert('Dados incompletos!', 'Favor preencher o CEP');
        } else if (!/^\d{5}-?\d{3}$/.test(zipCode)){
            Alert.alert('Dados incorretos!', 'Favor preencher o CEP corretamente');
        } else {
            if (!user.token) {
                navigation.navigate('Auth');
            } else {                
                navigation.navigate('PaymentScreen');
                setZipCode('');
            }
        }
    }

    return(
        <C.Container numItems={cart.totalItems}>
            {cart.totalItems > 0 &&
                <C.ScrollViewArea>
                    <C.CartItemsView>
                        {cart.items.map((item: ItemWithQuantity, index: number) => {
                            
                            return (
                            <C.ProductItemView key={index}>
                                <C.ImageView>
                                    <RenderImage url={item.thumbnailHd}/>
                                </C.ImageView>
        
                                <C.InfoView>
                                    <C.TopInfo>
                                        <C.Title>{item.title}</C.Title>
                                        <C.FinalPrice>R$ {item.price.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</C.FinalPrice>
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
                            </C.ProductItemView>);
                        })}
                    </C.CartItemsView>

                    <C.ZipCodeView>
                        <C.RowItems>
                            <C.TextField>CEP</C.TextField>
                            <C.ZipCodeInput 
                                placeholder="XXXXX-XXX" 
                                keyboardType="numeric"
                                maxLength={9}
                                value={zipCode} 
                                onChangeText={text => setZipCode(text.replace(/D/g,"").replace(/^(\d{5})(\d)/,"$1-$2").replace(/[, ]+/g, "").replace(/[. ]+/g, ""))}
                            />
                        </C.RowItems>
                    </C.ZipCodeView>

                    <C.PurchaseResumeView>
                        <C.RowItems>
                            <C.TextField>Subtotal</C.TextField>
                            <C.Price>R$ {cart.totalPrice.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</C.Price>
                        </C.RowItems>
                        <C.RowItems>
                            <C.TextField>Frete</C.TextField>
                            <C.Price>R$ 29.99</C.Price>
                        </C.RowItems>
                        <C.Line></C.Line>
                        <C.RowItems>
                            <C.TextField>Total</C.TextField>
                            <C.FinalPrice>R$ {(cart.totalPrice + 29.99).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</C.FinalPrice>
                        </C.RowItems>
                    </C.PurchaseResumeView>

                    <C.GoToPaymentBtn
                        activeOpacity={0.7}
                        onPress={redirectToPayment}
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