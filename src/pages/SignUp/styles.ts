import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
`;

export const KeyboardArea = styled.KeyboardAvoidingView`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const InputAreaView = styled.View`
    width: 80%;
    margin-bottom: 10px;
`;

export const InputLabel = styled.Text`
    font-size: 16px;
    color: #000;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const InputText = styled.TextInput`
    width: 100%;
    padding: 5px 10px;
    background-color: #fff;
    font-size: 14px;
    color: #000;
    border-radius: 7px;
    border: 1px solid #dde;
`;

export const SignUpButton = styled.TouchableOpacity`
    width: 80%;
    padding: 10px;
    background-color: #1a1a1a;
    font-size: 14px;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const LoadingArea = styled.View`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
`;