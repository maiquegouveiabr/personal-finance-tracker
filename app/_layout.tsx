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
            title: "Create Expense Modal",
          }}
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
