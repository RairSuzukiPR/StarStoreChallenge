import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../pages/Profile";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { OrderHistory } from "../pages/OrderHistory";
import { OrderItem } from "../pages/OrderItem";


const ProfileStack = createNativeStackNavigator();

export default () => {
    let user = useAppSelector(state => state.userReducer);
    return ( 
        <ProfileStack.Navigator screenOptions={{
            headerTitleStyle: {
                fontSize: 22
            },
        }}>
            <ProfileStack.Screen name='ProfileScreen' component={Profile} options={{
                headerTitle: "Olá, "+user.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
            }}/>
            <ProfileStack.Screen name='OrderHistoryScreen' component={OrderHistory} options={{
                headerTitle: "Meus Pedidos",
            }}/>
            <ProfileStack.Screen name='OrderItemScreen' component={OrderItem} options={{
                headerTitle: "Detalhes do Pedido",
            }}/>
        </ProfileStack.Navigator>
    );
}
