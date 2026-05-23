// ======================== HELPER FUNCTIONS ========================

import { Expense, Payment } from "./Expense";

/** Calculate total amount already paid */
export const getTotalPaid = (expense: Expense): number => {
  return expense.payments.reduce((sum, payment) => sum + payment.amount, 0);
};

/** Calculate remaining amount to pay */
export const getRemainingAmount = (expense: Expense): number => {
  return Math.max(0, expense.totalPrice - getTotalPaid(expense));
};

/** Calculate payment progress percentage (0 to 100) */
export const getPaymentProgress = (expense: Expense): number => {
  if (expense.totalPrice === 0) return 0;
  return Math.min(100, Math.round((getTotalPaid(expense) / expense.totalPrice) * 100));
};

/** Check if expense is fully paid (more reliable than isPaid flag) */
export const isFullyPaid = (expense: Expense): boolean => {
  return getRemainingAmount(expense) <= 0.01; // small tolerance for floating point
};

/** Get the next pending installment number */
export const getNextInstallmentNumber = (expense: Expense): number | null => {
  if (!expense.installments || expense.installments <= 0) return null;
  const paidInstallments = expense.payments.length;
  return paidInstallments + 1;
};

/** Get next due date (approximation) */
export const getNextDueDate = (expense: Expense): Date | null => {
  if (isFullyPaid(expense)) return null;

  const lastPayment = [...expense.payments].sort((a, b) => b.paymentDate.getTime() - a.paymentDate.getTime())[0];

  if (!lastPayment) {
    return expense.duePaymentDate || expense.date;
  }

  // Simple: add 1 month to last payment
  const nextDate = new Date(lastPayment.paymentDate);
  nextDate.setMonth(nextDate.getMonth() + 1);
  return nextDate;
};

/** Get all payments made in a specific month */
export const getPaymentsByMonth = (expense: Expense, monthReference: string): Payment[] => {
  return expense.payments.filter((p) => p.monthReference === monthReference);
};

/** Get summary object for an expense */
export const getExpenseSummary = (expense: Expense) => {
  const totalPaid = getTotalPaid(expense);
  const remaining = getRemainingAmount(expense);
  const progress = getPaymentProgress(expense);

  return {
    expenseId: expense.id,
    name: expense.name,
    totalPrice: expense.totalPrice,
    totalPaid,
    remaining,
    progress,
    isFullyPaid: isFullyPaid(expense),
    nextInstallment: getNextInstallmentNumber(expense),
    nextDueDate: getNextDueDate(expense),
    paymentCount: expense.payments.length,
  };
};

/** Calculate total spent across multiple expenses */
export const getTotalSpent = (expenses: Expense[]): number => {
  return expenses.reduce((sum, expense) => sum + getTotalPaid(expense), 0);
};

/** Get all expenses that are not fully paid */
export const getUnpaidExpenses = (expenses: Expense[]): Expense[] => {
  return expenses.filter((expense) => !isFullyPaid(expense));
};
