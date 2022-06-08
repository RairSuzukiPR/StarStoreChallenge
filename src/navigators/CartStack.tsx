import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButton } from '@react-navigation/elements';
import { Cart } from "../pages/Cart";
import { EmptyCart } from "../components/EmptyCart";
import { Payment } from "../pages/Payment";
import { ConfirmedOrder } from "../pages/ConfirmedOrder";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { RootStackParamList } from "../pages/RootStackPrams";


const CartStack = createNativeStackNavigator<RootStackParamList>();

export default () => {
    const navigation = useNavigation<any>();
    const cart = useAppSelector(state => state.cartReducer)

    return(
        <CartStack.Navigator>
            <CartStack.Screen name="CartScreen" component={Cart} options={{
                headerTitle: "Carrinho",
                headerTitleStyle: {
                    fontSize: 22
                },
                headerRight: () => cart.items.length > 0 ? <EmptyCart /> : <></>
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
                headerTitleAlign: 'center'
            }}/>
        </CartStack.Navigator>
    );
}