import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.round(max);

    let randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
        return generateRandomNumber();
    }
    else {
        return randomNum;
    }
}

const MainScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomNumber(1, 100, props.userChoice)
    );
    const [rounds, setRounds] = useState(0);

    let currentLow = useRef(1);
    let currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess === props.userChoice){
           props.onGameOver(rounds);
        }
    }, [currentGuess, props.userChoice, props.onGameOver])

    const nextGuessHandler = (direction) => {
        if ((direction == 'lower' && currentGuess < props.userChoice) ||
            (direction == 'greater' && currentGuess > props.userChoice)) {
            Alert.alert("Don't Lie", "You Know this is wrong....",
                [{
                    text: 'Sorry', style: 'cancel'
                }])
        };

        if (direction == 'lower') {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1); 
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => { nextGuessHandler('lower') }} />
                <Button title="GREATER" onPress={() => { nextGuessHandler('greater ') }} />
            </Card>
        </View>
    )

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default MainScreen;