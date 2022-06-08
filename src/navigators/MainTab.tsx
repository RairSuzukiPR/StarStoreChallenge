import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from '../pages/Home' 
import { TabBar } from "../components/TabBar";
import { HomeHeaderTitle } from "../components/HomeHeaderTitle";
import CartStack from "./CartStack";
import ProfileStack from "./ProfileStack";


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
            <Tab.Screen name="Home" component={Home} options={{
                headerStyle: {
                    height: 110
                },
                headerTitle: () => <HomeHeaderTitle />,
            }}/>
            <Tab.Screen name="Cart" component={CartStack} options={{headerShown: false}}/>
            <Tab.Screen name="Profile" component={ProfileStack} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}
