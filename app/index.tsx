import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Login screen</Text>
      <Link href={"/(tabs)"}>Login</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
