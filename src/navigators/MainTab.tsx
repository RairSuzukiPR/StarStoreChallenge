import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from '../pages/Home' 
import { Cart } from '../pages/Cart'
import { Profile } from '../pages/Profile'
import { TabBar } from "../components/TabBar";
import { HomeHeaderTitle } from "../components/HomeHeaderTitle";


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
            <Tab.Screen name="Cart" component={Cart}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}
