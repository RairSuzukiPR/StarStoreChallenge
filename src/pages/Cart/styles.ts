import styled from "styled-components/native";
import React from "react";
import { Dimensions } from "react-native";

export const Container = styled.View<{numItems: number}>`
    flex: 1;
    ${props => props.numItems == 0 &&
        `justify-content: center;
        align-items:center`
    }
`;

export const ScrollViewArea = styled.ScrollView`
    flex: 1;
`;

export const CartItemsView = styled.View`
    flex: 1;
    background-color: #fff;
    border-radius: 15px;
    elevation: 4;
    margin: 20px;
    padding: 10px;
    
`;
  
export const ProductItemView = styled.View`
    flex: 1;
    flex-direction: row;
    height: ${((Dimensions.get('window').width) - 60) /2}px;
    margin-bottom: 10px;
`;

export const ImageView = styled.View`
    flex: 1;
    margin-right: 10px;
`;

export const ImageItem = styled.Image<{isValid: boolean}>`
    flex: 1;
    border-radius: 12px;
    ${props => !props.isValid &&
        `width: 100%;
        height: 100%;
        resizeMode: contain;`
    }
`;

export const InfoView = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const TopInfo = styled.View`

`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin: 5px 0;
`;

export const Price = styled.Text`
    font-size: 14px;
    color: #000;
`;

export const FinalPrice = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #E22328;
`;

export const BottomInfo = styled.View`

`;

export const Seller = styled.Text`
    font-size: 14px;
    color: #000;
    margin-bottom: 5px;
`;

export const ZipCode = styled.Text`
    font-size: 14px;
    color: #000;
    margin-bottom: 5px;
`;

export const QuantityView = styled.View`
    flex-direction: row;
    margin-bottom: 5px;
`;

export const Quantity = styled.Text`
    margin: 0 7px;
    color: #000;
`;

export const QuantityIconArea = styled.TouchableOpacity`
    border: 1px solid black;
    align-items: center;
    justify-content:center;
    border-radius: 5px;
`;

export const ZipCodeView = styled.View`
    height: 60px;
    background-color: #fff;
    border-radius: 15px;
    elevation: 4;
    margin: 0 20px 20px 20px;
    padding: 15px;
    justify-content: center;
`;

export const RowItems = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ZipCodeInput = styled.TextInput`
    padding: 5px 5px 5px 15px;
    background-color: #EEE;
    border-radius: 7px;
    font-size: 16px;
`;

export const PurchaseResumeView = styled.View`
    margin: 0 20px 20px 20px;
    height: 160px;
    background-color: #fff;
    border-radius: 15px;
    elevation: 4;
    padding: 15px;
`;

export const Line = styled.View`
    width: 97%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.30);
    align-self: center;
    margin: 5px 0;
`;

export const GoToPaymentBtn = styled.TouchableOpacity`
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

export const NoItemsView = styled.View`
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 30px;
    border-radius: 15px;
    elevation: 4;
`;

export const NoItemsMessage = styled.Text`
    font-size: 20px;
    margin-top: 15px;
    color: #000;
`;

