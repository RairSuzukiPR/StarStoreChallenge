import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../pages/Cart";
import { EmptyCart } from "../components/EmptyCart";


const CartStack = createNativeStackNavigator();

export default () => {
    return(
        <CartStack.Navigator>
            <CartStack.Screen name="CartScreen" component={Cart} options={{
                headerTitle: "Carrinho",
                headerTitleStyle: {
                    fontSize: 24, 
                },
                headerRight: () => <EmptyCart />
            }} />
        </CartStack.Navigator>
    );
}