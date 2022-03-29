import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const NumberContainer = (props) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
};

let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        borderColor: 'grey',
        borderRadius: 10,
        padding: deviceWidth < 500 ? 20: 100,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        fontSize: 22,
        color: 'blue'
    }
});

export default NumberContainer;