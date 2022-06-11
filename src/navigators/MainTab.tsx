import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBar } from "../components/TabBar";
import CartStack from "./CartStack";
import ProfileStack from "./ProfileStack";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";


const Tab = createBottomTabNavigator();

export default () => {
    
    return (
        <Tab.Navigator 
            tabBar={props => <TabBar {...props} />}
            initialRouteName='TabHome'
            screenOptions={{
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
            <Tab.Screen name="Cart" component={CartStack} options={{headerShown: false}}/>
            <Tab.Screen name="Auth" component={AuthStack} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}
