import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
  card: {
       backgroundColor: 'white',
       //Shadow will work on IOS
       shadowColor: 'black',
       shadowOffset: {width: 0, height: 2},
       shadowOpacity: 0.26,
       shadowRadius: 6,
       //Android 
       elevation: 8,
       padding: 10,
       borderRadius: 20 
  }
})

export default Card;