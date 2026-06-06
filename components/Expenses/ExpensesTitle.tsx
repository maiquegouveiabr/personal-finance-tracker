import { useExpenseStore } from "@/stores/useExpenseStore";
import Title from "../Title";

export default function ExpensesTitle() {
  const { expenses } = useExpenseStore();
  return (
    <Title
      fontStyles={{ color: "#1E1E1E" }}
      containerStyles={{
        alignItems: "flex-start",
      }}
    >
      Expenses ({expenses.length})
    </Title>
  );
}
