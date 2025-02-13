import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  LandingPage: undefined;
  Dashboard: undefined;
};

function LandingPage({ navigation }: StackScreenProps<RootStackParamList, "LandingPage">) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/kicksvault.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to KicksVault</Text>
      <TouchableOpacity
        style={styles.roundButton}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.buttonText}>Browse Sneakers!</Text>
      </TouchableOpacity>
      <Text style={styles.introText}>
        Explore a collection of the most iconic sneakers in history, from classic basketball shoes to modern streetwear staples.
      </Text>
    </View>
  );
}

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F2937",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#E5E7EB",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  roundButton: {
    backgroundColor: "#480BB4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#E5E7EB",
    fontWeight: "bold",
  },
  introText: {
    fontSize: 16,
    textAlign: "center",
    color: "#E5E7EB",
  },
});
