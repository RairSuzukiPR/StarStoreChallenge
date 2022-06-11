import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { useEffect } from "react";

export const Preload = () => {
    const user = useAppSelector(state => state.userReducer)
    const navigation = useNavigation<any>();

    useEffect(()=> {
        if (!user.token){
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    { name: 'SignInScreen' },
                  ],
                })
              );
        } else {
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    { name: 'Profile' },
                  ],
                })
              );
        }
        
    }, [user.token]) 

    return null;
}