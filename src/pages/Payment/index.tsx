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
import { setId, setToken } from '../../redux/reducers/userReducer';


type confirmedOrderScreenProp = NativeStackNavigationProp<RootStackParamList, 'ConfirmedOrderScreen'>;

export const Payment = () => {
    const [card, setCard] = useState({
        validThru: '',
        cvv: '',
        nameCardOwner: '',
        cardNumber1: '',
        cardNumber2: '',
        cardNumber3: '',
        cardNumber4: '', 
    })    
    const refInputValid: MutableRefObject<any> = useRef();  //typar correto dps
    const refInputCvv: MutableRefObject<any> = useRef(); 
    const refInputCard1: MutableRefObject<any> = useRef();
    const refInputCard2: MutableRefObject<any> = useRef();
    const refInputCard3: MutableRefObject<any> = useRef();
    const refInputCard4: MutableRefObject<any> = useRef();

    const cart = useAppSelector(state => state.cartReducer);
    const user = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    
    const navigation = useNavigation<confirmedOrderScreenProp>();

    // useEffect(()=> { 
    //     if(!user.token) {
    //         navigation.navigate('SignInScreen');
    //     }
    // }, []);

    const isEveryCampOk = () => { // melhor forma?
        let hasError = true;

        if (!(card.nameCardOwner !== '' && card.validThru.length == 5 && card.cvv.length == 3 && 
            card.cardNumber1.length == 4 && card.cardNumber2.length == 4 && 
            card.cardNumber3.length == 4 && card.cardNumber4.length == 4 )){
                Alert.alert('Dados incompletos!', 'Favor preencher todos os dados.');
                hasError = false;
        }

        if (/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(card.validThru)){
            Alert.alert('Dados inconsistentes!', 'Favor preencher a data de expiração corretamente.');
            hasError = false;
        }

        return hasError;
    }

    const saveDataAndRedirect = () => {
        dispatch(setIdUserOrder(user.id));
        dispatch(saveOrder({
            cardNumber: parseInt(card.cardNumber1+card.cardNumber2+card.cardNumber3+card.cardNumber4),
            nameCardOwner: card.nameCardOwner,
            validThru: card.validThru,
            cvv: parseInt(card.cvv),
            totalPrice: cart.totalPrice,
            items: cart.items,
        }));
        dispatch(resetCart());
        // redirect to confirmed order
        navigation.navigate('ConfirmedOrderScreen'); //mandar essa compra por aqui direto e evitar de puxar na outra pagina e usar a outra pagina pra exibir qualquer pedido via props
    }

    return (
        <C.Container>
            <C.ScrollViewArea>
                <C.CreditCardView>
                    <C.CardOwnerNameInput 
                        placeholder="Nome impresso no cartão"
                        returnKeyType='next'
                        value={card.nameCardOwner}
                        onChangeText={text => /^[a-zA-Z\s]*$/.test(text) ? setCard({...card, nameCardOwner: text}) : ''}
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
                                    maxLength={5}
                                    value={card.validThru}
                                    onChangeText={text => setCard({...card, validThru: text.replace(/\D/g,"").replace(/(\d{2})(\d)/,"$1/$2")})}
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
                                    value={card.cvv}
                                    onChangeText={text => setCard({...card, cvv: text})}
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
                                value={card.cardNumber1}
                                onChangeText={text => setCard({...card, cardNumber1: text})}
                                returnKeyType='next'
                                maxLength={4}
                                blurOnSubmit={false}
                                onSubmitEditing={() => refInputCard2.current.focus()}
                            />
                            <C.CardNumberInput 
                                ref={refInputCard2}
                                placeholder="XXXX" 
                                keyboardType="numeric"
                                value={card.cardNumber2}
                                onChangeText={text => setCard({...card, cardNumber2: text})}
                                returnKeyType='next'
                                maxLength={4}
                                blurOnSubmit={false}
                                onSubmitEditing={() => refInputCard3.current.focus()}
                            />
                            <C.CardNumberInput 
                                ref={refInputCard3}
                                placeholder="XXXX" 
                                keyboardType="numeric"
                                value={card.cardNumber3}
                                onChangeText={text => setCard({...card, cardNumber3: text})}
                                returnKeyType='next'
                                maxLength={4}
                                blurOnSubmit={false}
                                onSubmitEditing={() => refInputCard4.current.focus()}
                            />
                            <C.CardNumberInput 
                                ref={refInputCard4}
                                placeholder="XXXX" 
                                keyboardType="numeric"
                                value={card.cardNumber4}
                                onChangeText={text => setCard({...card, cardNumber4: text})}
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
                    onPress={() => isEveryCampOk() ? saveDataAndRedirect() : ''}
                >
                    <C.BtnText>Confirmar pagamento</C.BtnText>
                </C.ConfirmPaymentBtn>
            </C.ScrollViewArea>
        </C.Container>
    );
}
