import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from "react-native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import Input from "../components/Input";
import colors from "../constants/color";
import defaultStyles from "../constants/default-styles";

const GameScreen = props => {

    const [inputValue, setInputValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const inputHandler = inputText => {
        setInputValue(inputText.replace(/[^0-9]/g, ''))
    };

    const resetHandler = () => {
        setInputValue('');
        setConfirmed(false);
    };

    const confirmHandler = () => {
        const choosenNum = parseInt(inputValue);
        if (isNaN(choosenNum) || choosenNum > 99 || choosenNum <= 0) {
            Alert.alert(
                'Invalid Number',
                'Number has to be from 1 to 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetHandler }]
            );

            return;
        };

        setConfirmed(true);
        setSelectedNumber(choosenNum);
        setInputValue('');
    };

    let confirmOutput;

    if (confirmed) {
        confirmOutput =
            <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" onPress={ () => { props.onStartGame(selectedNumber)}}/>
            </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={
            () => { Keyboard.dismiss() }
        }>
            <View style={styles.screen}>
                <Text style={defaultStyles.bodyText}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input}
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        blurOnSubmit
                        autoCapitalize="none"
                        value={inputValue}
                        onChangeText={inputHandler}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" color={colors.secondary} onPress={resetHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" color={colors.primary} onPress={confirmHandler} />
                        </View>
                    </View>
                </Card>
                {confirmOutput}
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        width: '100%'
    },
    button: {
        width: 100
    },
    input: {
        width: 30,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 50,
        alignItems: 'center'
    }
});

export default GameScreen;