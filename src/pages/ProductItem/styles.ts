import { Dimensions } from "react-native";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    elevation: 4;
    border-radius: 15px;
    padding: 15px;
    margin: 20px;
`;

export const ImageView = styled.View`
    flex: 1;
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

export const BottomInfo = styled.View`
 
`;

export const Title = styled.Text`
    color: #000;
    font-size: 24px;
    font-weight: bold;
    margin: 15px 0;
`;

export const Info = styled.Text`
    color: #000;
    margin-bottom: 5px;
`;

export const Price = styled.Text`
    color: #E22328;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const QuantityView = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
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

export const AddCartBtn = styled.TouchableOpacity`
    background-color: #1a1a1a;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const BtnText = styled.Text`
    color: #fff;
    font-weight: bold;
`;