import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/navigators/MainTab';
import { StatusBar } from 'react-native';
import { Provider } from "react-redux";
import {store, persistor} from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";


const Container = styled.SafeAreaView`
  	background-color: #1B1B1B;
	flex: 1;
`;


const App = () => {

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<Container>
						<StatusBar barStyle="dark-content" backgroundColor="#fff" />
						<MainTab />
					</Container>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;
