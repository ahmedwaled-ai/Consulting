import apiClient from "./apiClient";

export interface PaymentData {
  bookingId: string;
  amount: number;
  paymentMethod: 'card' | 'paypal';
  cardNumber?: string;
  cardName?: string;
  expiryDate?: string;
  cvv?: string;
}

export const paymentApi = {
  createPayment: async (data: PaymentData) => {
    // SECURITY: Never send CVV to backend - use payment gateway
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { cvv, ...safeData } = data;
    const response = await apiClient.post('/payments', safeData);
    return response.data;
  },

  getPaymentById: async (id: string) => {
    const response = await apiClient.get(`/payments/${id}`);
    return response.data;
  },

  getUserPayments: async () => {
    const response = await apiClient.get('/payments/user');
    return response.data;
  },
};
