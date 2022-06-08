import styled from "styled-components/native";
import { Dimensions } from "react-native";


export const Container = styled.View`
    flex: 1;
`;

export const ScrollViewArea = styled.ScrollView`
    flex: 1;
`;

export const CreditCardView = styled.View`
    background-color: #3F3F3F;
    height: ${(Dimensions.get('window').width - 40) / 1.6}px;
    margin: 20px;
    padding: 32px 20px;
    border-radius: 15px;
    elevation: 4;
    justify-content: space-between;
`;

export const CardOwnerNameInput = styled.TextInput`
    padding: 5px 12px;
    background-color: #EEE;
    border-radius: 7px;
    font-size: 20px;
    color: #000;
`;

export const BottomCardInfoView = styled.View`
`;

export const ValidThruView = styled.View`
    flex-direction: row;
`;

export const ValidThruAndCvvView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const ValidThruTextView = styled.View`

`;

export const ValidThruText = styled.Text`
    color: #fff;
    margin-right: 10px;
`;

export const ValidThruTextInput = styled.TextInput`
    padding: 5px 8px;
    background-color: #EEE;
    border-radius: 7px;
    font-size: 16px;
`;

export const CardNumberView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const CardNumberInput = styled.TextInput`
    padding: 7px 10px;
    background-color: #EEE;
    border-radius: 7px;
    font-size: 16px;
`;

export const CardCvvView = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CardCvvText = styled.Text`
    color: #fff;
    margin-right: 10px;
`;

export const CardCvvInput = styled.TextInput`
    padding: 7px 10px;
    background-color: #EEE;
    border-radius: 7px;
    font-size: 16px;
`;

export const PaymentOptionsIconsView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 20px 20px 20px;
`;

export const LeftIcons = styled.View`
    flex-direction: row;
    padding: 0 2px;
`;

export const RightIcons = styled.View`
    flex-direction: row;
`;

export const IconLabel = styled.Text`
    color: #000;
    margin-left: 5px;
`;

export const AddCardBtn = styled.TouchableOpacity`
    background-color: #1A1A1A;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    padding: 1px;
`;

export const ChangeCardBtn = styled.TouchableOpacity`
    justify-content: space-between;
    align-items: center;
    padding: 1px;
`;

export const AddressView = styled.View`
    background-color: #fff;
    margin: 0 20px 20px 20px;
    border-radius: 15px;
    padding: 15px;
    elevation: 4;
    flex-direction: row;
    justify-content: space-between;
`;

export const AdressInfoView = styled.View`
    width: 80%;
`;

export const AdressText = styled.Text`
    color: #000;
`;

export const Address = styled.View`
    margin-top: 15px;
`;

export const ArrowIconView = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: center;
`;

export const FinalPrice = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #E22328;
`;

export const Price = styled.Text`
    font-size: 14px;
    color: #000;
`;

export const PurchaseResumeView = styled.View`
    margin: 0 20px 20px 20px;
    height: 160px;
    background-color: #fff;
    border-radius: 15px;
    elevation: 4;
    padding: 15px;
`;

export const RowItems = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Line = styled.View`
    width: 97%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.30);
    align-self: center;
    margin: 5px 0;
`;

export const ConfirmPaymentBtn = styled.TouchableOpacity`
    margin: 0 20px 20px 20px;
    height: 50px;
    background-color: #1A1A1A;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;

export const BtnText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const TextField = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000;
`;