import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import BodyText from "../components/UI/BodyText";
import Colors from "../constants/colors";
import MainButton from "../components/UI/MainButton";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>Game Over</BodyText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <BodyText>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
        guess the number{" "}
      </BodyText>
      <BodyText style={styles.resultText}>
        Number was: <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
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
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
  },
  resultText: {
    marginVertical: 20,
    textAlign: "center",
  },
});
