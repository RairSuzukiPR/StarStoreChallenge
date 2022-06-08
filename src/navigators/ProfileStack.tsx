import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../pages/Profile";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { OrderHistory } from "../pages/OrderHistory";
import { OrderItem } from "../pages/OrderItem";


const ProfileStack = createNativeStackNavigator();

export default () => {
    let token = useAppSelector(state => state.userReducer.token);
    return (
        <ProfileStack.Navigator screenOptions={{
            headerTitleStyle: {
                fontSize: 22
            },
        }}>
            <ProfileStack.Screen name='ProfileScreen' component={Profile} options={{
                // headerTitle: token != '' ? "Meu Perfil": "Login",
                headerTitle: "Meu Perfil",
            }} />
            <ProfileStack.Screen name='OrderHistoryScreen' component={OrderHistory} options={{
                headerTitle: "Meus Pedidos",
            }}/>
            <ProfileStack.Screen name='OrderItemScreen' component={OrderItem} options={{
                headerTitle: "Detalhes do Pedido",
            }}/>
        </ProfileStack.Navigator>
    );
}
