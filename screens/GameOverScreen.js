import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const GameOverScreen = (props) => {
    const { noOfRounds, number} = props;
    return (
        <View style={styles.screen}>
            <Text>
                The Game is Over!
            </Text>
            <Text>Number of Rounds: {noOfRounds}</Text>
            <Text>Number Was: {number}</Text>
            <Button title="NEW GAME" onPress={props.gameRestart}/>
        </View>
    )

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;