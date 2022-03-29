import React from "react";
import { Text, View, StyleSheet } from 'react-native';

import colors from "../constants/color";
import defaultStyles from "../constants/default-styles";

const Header = props => {
    
    return (
        <View style={styles.header}>
            <Text style={defaultStyles.titleText}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Header;