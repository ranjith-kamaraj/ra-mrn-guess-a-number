import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';

import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import MainScreen from "./screens/MainScreen";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFonts = () => {
	return Font.loadAsync({
	  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
	  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};
  

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [guessRounds, setGuessRounds] = useState(0);
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) {
		return (
		  <AppLoading
			startAsync={fetchFonts}
			onFinish={() => setDataLoaded(true)}
			onError={(err) => console.log(err)}
		  />
		);
	}

	const configureNewGameHandler = () => {
		setGuessRounds(0);
		setUserNumber(null)
	};

	const userNumberHandler = (selectedValue) => {
		setUserNumber(selectedValue);
		setGuessRounds(0);
	};

	const gameOverHandler = (noOfRounds) => {
		setGuessRounds(noOfRounds);
	};

	let content = <GameScreen een onStartGame={userNumberHandler} />;

	if (userNumber && guessRounds <= 0) {
		content = <MainScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
	}
	else if (guessRounds > 0) {
		content = <GameOverScreen noOfRounds={guessRounds} number={userNumber} gameRestart={configureNewGameHandler} />;
	}
	else {

	}

	return (
		<View style={styles.container}>
			<Header title="Guess a Number" />
			{content}
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
