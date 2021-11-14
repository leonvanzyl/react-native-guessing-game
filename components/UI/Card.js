import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000", // iOS Shadow
    shadowOpacity: 0.26, // iOS Shadow
    shadowOffset: {
      width: 0,
      height: 2,
    }, // iOS Shadow
    shadowRadius: 6, // iOS Shadow
    backgroundColor: "#fff",
    elevation: 8, // Android Shadow
    padding: 20,
    borderRadius: 10,
  },
});
