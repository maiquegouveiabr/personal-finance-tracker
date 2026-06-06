import { Expense } from "@/interfaces/Expense";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  expense: Expense;
};

export default function ExpenseItem({ expense }: Props) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/detailExpenseModal",
      params: {
        id: expense.id,
      },
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.mainContainer}>
        <View style={styles.leftSideContainer}>
          <Text style={{ color: "#FFFFFF" }}>{expense.name}</Text>
        </View>
        <View style={styles.rightSideContainer}>
          <Text style={styles.detailsText}>{expense.date.toLocaleDateString()}</Text>
          <Text style={styles.detailsText}>${expense.totalPrice}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#1E1E1E",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {},
  leftSideContainer: {
    maxWidth: "70%",
  },
  rightSideContainer: {
    maxWidth: "20%",
  },
  detailsText: {
    textAlign: "right",
    fontSize: 11,
    color: "#FFFFFF",
  },
});
