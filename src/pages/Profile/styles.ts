import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: space-between;
    /* background-color: gray; */
`;

export const OptionsView = styled.View`
    background-color: #fff;
    border-radius: 15px;
    elevation: 4;
    margin: 20px;
    padding: 0 15px;
`;

export const OptionButton = styled.TouchableOpacity`
    padding: 20px 0;
    flex-direction: row;
    align-items: center;
`;

export const OptionButtonText = styled.Text`
    font-size: 15px;
    color: #000;
    margin-left: 15px;
`;

export const LogoutView = styled.View`
    background-color: #fff;
    border-radius: 15px;
    elevation: 4;
    margin: 20px;
    padding: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LogoutButton = styled.TouchableOpacity`
    
`;

export const LogoutText = styled.Text`
    font-size: 15px;
    color: #000;
    font-weight: bold;
`;

export const LoginView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin: 20px;
    padding: 0 15px; 
`;

export const InputAreaView = styled.View`
    width: 90%;
    margin-bottom: 20px;
`;

export const InputLabel = styled.Text`
    font-size: 14px;
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
    width: 90%;
    padding: 10px;
    background-color: #1a1a1a;
    font-size: 14px;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;