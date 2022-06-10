import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-right: 35px;
`;

export const TextField = styled.Text`
    color: #000;
    font-family: 'SfDistantGalaxy';
    font-size: 28px;
    margin-top: 5px;
`;

export const TextInputField = styled.TextInput`
    margin-top: 15px;
    background-color: #EEE;
    min-width: 100%;
    color: #000;
    font-size: 16px;
    padding: 10px 10px 10px 35px;
    border-radius: 7px;
    margin-bottom: 10px;
`;

export const Icon = styled.Text`
    color: #000;
    position: absolute;
    margin: 31px 0 0 10px;
`;

export const ViewArea = styled.View`
`;
