import styled from "styled-components/native";
import React from "react";
import { Dimensions } from "react-native";


export const PressableTag = styled.Pressable`

`;

export const Container = styled.Pressable`
    background-color: #fff;
    width: ${Dimensions.get('window').width / 2 - 30}px;
    min-height: ${(Dimensions.get('window').height) * 0.33}px;
    margin: 10px;
    border-radius: 12px;
    elevation: 4;
    
`;

export const ImageArea = styled.View`
    height: 135px;
    margin: 10px;
`;

export const ImageItem = styled.Image<{isValid: any}>`
    flex: 1;
    border-radius: 12px;
    ${props => !props.isValid &&
        `width: 100%;
        height: 100%;
        resizeMode: contain;`
    }
`;

export const InfoArea = styled.View`
    flex: 1;
    margin: 0 10px 10px 10px;
    justify-content: space-between;
`;

export const ItemTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #000;
`;

export const PriceAndButtonArea = styled.View`
    margin-top: 5px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Price = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #E22328;
`;

export const AddCartBtn = styled.TouchableOpacity`
    /* width: 13px;
    height: 15px; */
    background-color: #1A1A1A;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    padding: 3px;
`;
