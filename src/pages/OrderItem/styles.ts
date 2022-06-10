import styled from "styled-components/native";
import React from "react";
import { Dimensions } from "react-native";


export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const ScrollViewArea = styled.ScrollView`
    flex: 1;
`;


export const OrderItemsView = styled.View`
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

export const BottomText = styled.Text`
    font-size: 14px;
    color: #000;
    margin-bottom: 5px;
`;

export const ConfirmView = styled.View`
    background-color: #fff;
    margin: 20px 20px 0 20px;
    padding: 15px;
    border-radius: 15px;
    elevation: 4;
`;

export const ConfirmTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
    margin-right: 10px;
`;

export const ConfirmText = styled.Text`
    font-size: 14px;
    color: #000;
    margin-bottom: 5px;
`;

export const ConfirmTextTotal = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #000;
`;

export const AmountInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ConfirmPrice = styled.Text`
    font-size: 14px;
    color: #000;
`;

export const ConfirmPriceTotal = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #E22328;
`;