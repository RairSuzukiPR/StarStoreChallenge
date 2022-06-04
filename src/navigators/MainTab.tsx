import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from '../pages/Home' 
import { Cart } from '../pages/Cart'
import { Profile } from '../pages/Profile'
import { TabBarIcon } from '../components/TabBarIcon'
import { TabBar } from "../components/TabBar";

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator 
            tabBar={props => <TabBar {...props} />}
            initialRouteName='TabHome'
        >
            <Tab.Screen name="Home" component={Home} options={{
                title: "STARSTORE",
                headerTitleStyle: {
                    fontFamily: 'SfDistantGalaxy',
                    fontSize: 24,
                }
            }}/>
            <Tab.Screen name="Cart" component={Cart}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}

/*
<Tab.Navigator 
    screenOptions={({route}) => ({
        tabBarIcon: () => <TabBarIcon name={route.name} />,
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        tabBarInactiveTintColor: "#f0f",
        tabBarStyle: {
            // backgroundColor: "#f00"
        }
        // headerStyle: {
        //     height: 100
        // }
    })}
>
    <Tab.Screen name="Home" component={Home} options={{
        title: "STARSTORE",
        headerTitleStyle: {
            fontFamily: 'SfDistantGalaxy',
            fontSize: 24,
        }
    }}/>
    <Tab.Screen name="Carrinho" component={Cart}/>
    <Tab.Screen name="Perfil" component={Profile}/>
</Tab.Navigator>
*/