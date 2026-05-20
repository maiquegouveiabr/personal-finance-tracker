import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type TitleProps = {
  children: React.ReactNode;
  containerStyles?: StyleProp<ViewStyle>;
  fontStyles?: StyleProp<TextStyle>;
};

export default function Title({ children, containerStyles, fontStyles }: TitleProps) {
  return (
    <View style={[styles.titleContainer, containerStyles]}>
      <Text style={[styles.titleStyle, fontStyles]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
