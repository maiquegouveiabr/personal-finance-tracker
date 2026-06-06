import { StyleSheet } from "react-native";

export const colors = {
  primary: "#007AFF",
  primaryBtn: "#007AFF",
  primaryBtnText: "#ffffff",
  background: "#F6F8FA",
  text: "#333333",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  mainText: {
    fontSize: 16,
    color: colors.text,
  },
  primaryButton: {
    backgroundColor: colors.primaryBtn,
    borderRadius: 8,
  },
});
