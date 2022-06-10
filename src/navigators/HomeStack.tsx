import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductItem } from "../pages/ProductItem";
import { Home } from "../pages/Home";
import { HomeHeaderTitle } from "../components/HomeHeaderTitle";



const HomeStack = createNativeStackNavigator();

export default () => {
    
    return (
        <HomeStack.Navigator screenOptions={{
            headerTitleStyle: {
                fontSize: 22
            },
        }}>
            <HomeStack.Screen name="HomeScreen" component={Home} options={{
                headerTitle: () => <HomeHeaderTitle />,
                
            }}/>
            <HomeStack.Screen name='ProductItemScreen' component={ProductItem} options={{
                headerTitle: "",
            }} />
        </HomeStack.Navigator>
    );
}