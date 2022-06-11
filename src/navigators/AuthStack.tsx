import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../pages/SignIn";
import ProfileStack from "./ProfileStack";
import { Preload } from "../pages/Preload";


const AuthStack = createNativeStackNavigator();

export default () => {
    return(
        <AuthStack.Navigator
            initialRouteName='Preload'
        >
            <AuthStack.Screen name='Preload' component={Preload} options={{headerShown: false}}/>
            <AuthStack.Screen name='SignInScreen' component={SignIn} options={{
                headerTitle: "Login",
            }}/>
            <AuthStack.Screen name='Profile' component={ProfileStack} options={{headerShown: false}}/>
        </AuthStack.Navigator>
    );
}