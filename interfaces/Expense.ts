export interface Payment {
  id: number;
  amount: number;
  paymentDate: Date;
  monthReference?: string; // e.g., "2026-05", "2026-06"
  installmentNumber?: number; // e.g., 1, 2, 3...
  paymentMethod: PaymentMethod;
  note?: string;
}

export enum PaymentMethod {
  PIX = "Pix",
  CREDIT_CARD = "Credit Card",
  DEBIT_CARD = "Debit Card",
  CASH = "Cash",
  BOLETO = "Boleto",
  BANK_TRANSFER = "Bank Transfer",
}

export interface Expense {
  id: string;
  category: string;
  name: string;
  description?: string;

  date: Date; // Purchase / expense date
  duePaymentDate?: Date; // First due date

  isPaid: boolean; // Whether the whole expense is fully paid
  totalPrice: number; // Total amount to be paid
  paymentMethod: PaymentMethod; // Main payment method used for this expense

  merchant?: string;

  createdAt: Date;
  updatedAt: Date;
}
