import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButton } from '@react-navigation/elements';
import { Cart } from "../pages/Cart";
import { EmptyCart } from "../components/EmptyCart";
import { Payment } from "../pages/Payment";
import { ConfirmedOrder } from "../pages/ConfirmedOrder";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';


const CartStack = createNativeStackNavigator();

export default () => {
    const navigation = useNavigation<any>();
    return(
        <CartStack.Navigator>
            <CartStack.Screen name="CartScreen" component={Cart} options={{
                headerTitle: "Carrinho",
                headerTitleStyle: {
                    fontSize: 22
                },
                headerRight: () => <EmptyCart />
            }}/>
            <CartStack.Screen name="PaymentScreen" component={Payment} options={{
                headerTitle: "Pagamento",
                headerTitleStyle: {
                    fontSize: 22    
                }
            }}/>
            <CartStack.Screen name="ConfirmedOrderScreen" component={ConfirmedOrder} options={{
                headerTitle: "Pedido",
                headerTitleStyle: {
                    fontSize: 22    
                },
                headerLeft: (props) => (
                    <HeaderBackButton
                      {...props}
                      onPress={() => {
                        navigation.dispatch(StackActions.popToTop());
                      }}
                    style={{marginLeft: -5}}
                    />
                  ),
                // headerBackVisible: false,
                headerTitleAlign: 'center'
            }}/>
        </CartStack.Navigator>
    );
}