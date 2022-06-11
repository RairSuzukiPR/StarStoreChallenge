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
`;

export const LoginButton = styled.TouchableOpacity`
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

export const LoginOptions = styled.View`
    margin-top: 20px;
`;

export const LoginOpt = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #fff;
    padding: 10px;
    border-radius: 7px;
    margin-top: 20px;
    elevation: 4;
`;
 
export const IconView = styled.View`
    
`;

export const LabelText = styled.Text`
    color: #000;
    margin-left: 10px;
`;