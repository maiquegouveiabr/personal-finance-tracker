import GeneralDetailsComponent from "@/components/Expenses/GeneralDetails/GeneralDetailsComponent";
import HeaderRight from "@/components/Expenses/HeaderRight";
import MainDetails from "@/components/Expenses/MainDetails/MainDetailsComponent";
import { useExpenseStore } from "@/stores/useExpenseStore";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailExpenseModal() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { expenses, removeExpense } = useExpenseStore();

  const expense = expenses.find((el) => el.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      presentation: "modal",
      title: "Expense Details",
      headerRight: () => <HeaderRight expenseId={id} onDismiss={() => router.dismiss()} />,
    });
  }, [navigation, id]);

  if (!expense) {
    return <View style={{ flex: 1 }} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <MainDetails expense={expense} />
      <GeneralDetailsComponent expense={expense} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
