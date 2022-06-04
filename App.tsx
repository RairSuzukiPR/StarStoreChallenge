import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/navigators/MainTab';
import { StatusBar } from 'react-native';


const Container = styled.SafeAreaView`
  	background-color: #1B1B1B;
	flex: 1;
`;



const App = () => {

	return (
		<NavigationContainer>
			<Container>
				<StatusBar barStyle="dark-content" backgroundColor="#fff" />
				<MainTab />
			</Container>
		</NavigationContainer>
	);
};

export default App;
