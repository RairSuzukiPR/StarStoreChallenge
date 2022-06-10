import styled from "styled-components/native";
import React from "react";

export const Container = styled.SafeAreaView<{isEmpty: boolean}>`
    flex: 1;

    ${props => props.isEmpty &&`
        justify-content: center;
        align-items: center;
    `}
`;

export const ScrollViewArea = styled.ScrollView`
    flex: 1;
`;

export const OrderItemView = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    padding: 15px;
    margin: 20px 20px 0 20px;
    border-radius: 12px;
`;

export const LeftInfoView = styled.View`
    flex: 1;
`;

export const TitleText = styled.Text`
    color: #000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const InfoText = styled.Text`
    color: #000;
    font-size: 14px;
    margin-bottom: 10px;
`;

export const RightInfoView = styled.View`
    width: 15px;
`;

export const ShowFullOrderView = styled.View`

`;

export const FixView = styled.View`
    margin-bottom: 20px;
`;
