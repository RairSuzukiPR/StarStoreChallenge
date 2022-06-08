import * as C from './styles'
import React, { useEffect, useRef, useState } from "react";
import { Alert } from 'react-native';
import { MutableRefObject } from 'react-test-renderer/node_modules/@types/react';
import { faAngleRight, faPlus, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { saveOrder, setIdUserOrder } from '../../redux/reducers/orderReducer';
import { resetCart } from '../../redux/reducers/cartReducer';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../RootStackPrams';


type confirmedOrderScreenProp = NativeStackNavigationProp<RootStackParamList, 'ConfirmedOrderScreen'>;

export const Payment = () => {
    const [validThru, setValidThru] = useState('');
    const [cvv, setCvv] = useState('');
    const [nameCardOwner, setNameCardOwner] = useState(''); // arrumar
    const [cardNumber1, setCardNumber1] = useState(''); // arrumar
    const [cardNumber2, setCardNumber2] = useState('');
    const [cardNumber3, setCardNumber3] = useState('');
    const [cardNumber4, setCardNumber4] = useState('');
    
    const refInputValid: MutableRefObject<any> = useRef(); 
    const refInputCvv: MutableRefObject<any> = useRef(); //typar correto dps
    const refInputCard1: MutableRefObject<any> = useRef();
    const refInputCard2: MutableRefObject<any> = useRef();
    const refInputCard3: MutableRefObject<any> = useRef();
    const refInputCard4: MutableRefObject<any> = useRef();

    const cart = useAppSelector(state=> state.cartReducer);
    const user = useAppSelector(state=> state.userReducer);
    const order = useAppSelector(state=> state.orderReducer);
    const dispatch = useAppDispatch();
    
    const navigation = useNavigation<confirmedOrderScreenProp>();

    const isEveryCampFilled = () => { // melhor forma?
        if (nameCardOwner !== '' && validThru.length == 4 && cvv.length == 3 && 
            cardNumber1.length == 4 && cardNumber2.length == 4 && 
            cardNumber3.length == 4 && cardNumber4.length == 4 ){
                return true;
        }
        Alert.alert('Dados incompletos!', 'Favor preencher todos os dados.');
        return false;
    }

    const saveDataAndRedirect = () => {
        dispatch(setIdUserOrder(user.id));
        dispatch(saveOrder({
            cardNumber: parseInt(cardNumber1+cardNumber2+cardNumber3+cardNumber4),
            nameCardOwner,
            validThru,
            cvv: parseInt(cvv),
            totalPrice: cart.totalPrice,
            items: cart.items,
        }));
        dispatch(resetCart());
        //redirect to confirmed order
        navigation.navigate('ConfirmedOrderScreen'); //mandar essa compra por aqui direto e evitar de puxar na outra pagina e usar a outra pagina pra exibir qualquer pedido via props
        
    }

    return (
        <C.Container>
            <C.ScrollViewArea>
                <C.CreditCardView>
                    <C.CardOwnerNameInput 
                        placeholder="Nome impresso no cartão"
                        returnKeyType='next'
                        value={nameCardOwner}
                        onChangeText={text => setNameCardOwner(text)}
                        blurOnSubmit={false}
                        onSubmitEditing={() => refInputValid.current.focus()}
                    />
                    <C.BottomCardInfoView>
                        <C.ValidThruAndCvvView>
                            <C.ValidThruView>
                                <C.ValidThruTextView>
                                    <C.ValidThruText>VALID</C.ValidThruText>
                                    <C.ValidThruText>THRU</C.ValidThruText>
                                </C.ValidThruTextView>
                                <C.ValidThruTextInput 
                                    ref={refInputValid}
                                    placeholder="MM/aa" 
                                    keyboardType="numeric" 
                                    returnKeyType='next'
                                    maxLength={4}
                                    value={validThru}
                                    onChangeText={text => setValidThru(text)}
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => refInputCvv.current.focus()}
                                />
                            </C.ValidThruView>
                            <C.CardCvvView>
                                <C.CardCvvText>CVV</C.CardCvvText>
                                <C.CardCvvInput 
                                    ref={refInputCvv}
                                    placeholder="XXX" 
                                    keyboardType="numeric"
                                    returnKeyType='next'
                                    maxLength={3}
                                    value={cvv}
                                    onChangeText={text => setCvv(text)}
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => refInputCard1.current.focus()}
                                />
                            </C.CardCvvView>
                        </C.ValidThruAndCvvView>
                        <C.CardNumberView>
                            <C.CardNumberInput 
                                ref={refInputCard1}
                                placeholder="XXXX" 
                                keyboardType="numeric"
                                value={cardNumber1}
                                onChangeText={text => setCardNumber1(text)}
                                returnKeyType='next'
                                maxLength={4}
                                blurOnSubmit={false}
                                onSubmitEditing={() => refInputCard2.current.focus()}
                            />
                            <C.CardNumberInput 
                                ref={refInputCard2}
                                placeholder="XXXX" 
                                keyboardType="numeric"
                                value={cardNumber2}
                                onChangeText={text => setCardNumber2(text)}
                                returnKeyType='next'
                                maxLength={4}
                                blurOnSubmit={false}
                                onSubmitEditing={() => refInputCard3.current.focus()}
                            />
                            <C.CardNumberInput 
                                ref={refInputCard3}
                                placeholder="XXXX" 
                                keyboardType="numeric"
                                value={cardNumber3}
                                onChangeText={text => setCardNumber3(text)}
                                returnKeyType='next'
                                maxLength={4}
                                blurOnSubmit={false}
                                onSubmitEditing={() => refInputCard4.current.focus()}
                            />
                            <C.CardNumberInput 
                                ref={refInputCard4}
                                placeholder="XXXX" 
                                keyboardType="numeric"
                                value={cardNumber4}
                                onChangeText={text => setCardNumber4(text)}
                                maxLength={4}
                            />                        
                        </C.CardNumberView>
                    </C.BottomCardInfoView>
                </C.CreditCardView>
                
                <C.PaymentOptionsIconsView>
                    <C.LeftIcons>
                        <C.AddCardBtn activeOpacity={0.7}>
                            <FontAwesomeIcon icon={faPlus} style={{color: '#fff'}}/>
                        </C.AddCardBtn>
                        <C.IconLabel>Cadastrar Cartão</C.IconLabel>
                    </C.LeftIcons>
                    <C.RightIcons>
                        <C.ChangeCardBtn activeOpacity={0.7}>
                            <FontAwesomeIcon icon={faWallet} style={{minWidth: 20, minHeight: 20}} />
                        </C.ChangeCardBtn>
                        <C.IconLabel>Trocar cartão</C.IconLabel>
                    </C.RightIcons>
                </C.PaymentOptionsIconsView>

                <C.AddressView>
                    <C.AdressInfoView>
                        <C.TextField>Endereço</C.TextField>
                        <C.Address>
                            <C.AdressText>Rua são martins - 58926-000 ,79</C.AdressText>
                            <C.AdressText>CENTRO, João Pessoa / PB</C.AdressText>
                        </C.Address>
                    </C.AdressInfoView>
                    <C.ArrowIconView>
                        <FontAwesomeIcon icon={faAngleRight} style={{minWidth: 20, minHeight: 25, color: 'rgba(0, 0, 0, 0.6)'}} />
                    </C.ArrowIconView>
                </C.AddressView>

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

                <C.ConfirmPaymentBtn
                    activeOpacity={0.7}
                    onPress={() => isEveryCampFilled() ? saveDataAndRedirect() : ''}
                >
                    <C.BtnText>Confirmar pagamento</C.BtnText>
                </C.ConfirmPaymentBtn>
            </C.ScrollViewArea>
        </C.Container>
    );
}
