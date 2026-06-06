import GeneralDetailsComponent from "@/components/Expenses/GeneralDetails/GeneralDetailsComponent";
import HeaderRight from "@/components/Expenses/HeaderRight";
import MainDetails from "@/components/Expenses/MainDetails/MainDetailsComponent";
import PrimaryButton from "@/components/PrimaryButton";
import { useExpenseStore } from "@/stores/useExpenseStore";
import { globalStyles } from "@/styles/globalStyles";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { View } from "react-native";

export default function DetailExpenseModal() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { expenses } = useExpenseStore();

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
    <View style={[globalStyles.container]}>
      <MainDetails expense={expense} />
      <GeneralDetailsComponent expense={expense} />

      <PrimaryButton buttonStyles={{ marginTop: 20 }} onPress={() => router.push(`/editExpenseModal?id=${id}`)}>
        Edit Expense
      </PrimaryButton>
    </View>
  );
}
