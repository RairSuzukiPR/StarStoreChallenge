import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/navigators/MainTab';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from "react-redux";
import {store, persistor} from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";


const App = () => {

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<SafeAreaView style={{flex: 1}}>
						<StatusBar barStyle="dark-content" backgroundColor="#fff" />
						<MainTab />
					</SafeAreaView>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;
