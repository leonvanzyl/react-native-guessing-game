import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import BodyText from "../components/UI/BodyText";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>Game Over</BodyText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart}></Button>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "80%",
    height: 300,
    borderRadius: 500,
    borderWidth: 3,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
