import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    background-color: #fff;
`;

export const TabButton = styled.TouchableHighlight`
    flex: 1;
    justify-content: center;
    align-items: center;
    /* padding: 10px; */
    height: 50px;
`;

export const BadgeArea = styled.View`

`;

export const CartBadge = styled.View`
    position: absolute;
    right: -7px;
    top: -10px; 
    background-color: #D9D9D9;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const BadgeAmount = styled.Text`
    color: #000;
    font-size: 11px;
    font-weight: bold;
`;