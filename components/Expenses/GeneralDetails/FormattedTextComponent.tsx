import { StyleSheet, Text, View } from "react-native";

type Props = {
  primaryText: string;
  secondaryText: string;
};

export default function FormattedTextComponent({ primaryText, secondaryText }: Props) {
  return (
    <View style={styles.container}>
      <Text>{primaryText}</Text>
      <Text style={styles.secondaryText}>{secondaryText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  primaryText: {},
  secondaryText: {
    fontWeight: "500",
  },
});
