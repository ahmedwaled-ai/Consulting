import apiClient from "./apiClient";

export interface BookingData {
  service: string;
  date: string;
  time: string;
  consultant: string;
  notes?: string;
  price: number;
}

export const bookingApi = {
  createBooking: async (data: BookingData) => {
    const response = await apiClient.post('/bookings', data);
    return response.data;
  },

  getUserBookings: async () => {
    const response = await apiClient.get('/bookings/user');
    return response.data;
  },

  getBookingById: async (id: string) => {
    const response = await apiClient.get(`/bookings/${id}`);
    return response.data;
  },

  cancelBooking: async (id: string) => {
    const response = await apiClient.delete(`/bookings/${id}`);
    return response.data;
  },

  updateBooking: async (id: string, data: Partial<BookingData>) => {
    const response = await apiClient.put(`/bookings/${id}`, data);
    return response.data;
  },
};