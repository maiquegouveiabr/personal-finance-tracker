import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="createExpenseModal"
          options={{
            presentation: "modal",
            title: "Create New Expense",
          }}
        />
        <Stack.Screen
          name="detailExpenseModal"
          options={{
            presentation: "modal",
            title: "Expense Details",
          }}
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
