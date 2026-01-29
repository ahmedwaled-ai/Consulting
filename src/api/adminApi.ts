import apiClient from "./apiClient";

export const adminApi = {
  // Bookings Management
  getAllBookings: async () => {
    const response = await apiClient.get('/admin/bookings');
    return response.data;
  },

  updateBookingStatus: async (id: string, status: string) => {
    const response = await apiClient.patch(`/admin/bookings/${id}/status`, { status });
    return response.data;
  },

  // Users Management
  getAllUsers: async () => {
    const response = await apiClient.get('/admin/users');
    return response.data;
  },

  updateUserRole: async (userId: string, role: string) => {
    const response = await apiClient.patch(`/admin/users/${userId}/role`, { role });
    return response.data;
  },

  // Services Management
  getAllServices: async () => {
    const response = await apiClient.get('/admin/services');
    return response.data;
  },

  createService: async (data: unknown) => {
    const response = await apiClient.post('/admin/services', data);
    return response.data;
  },

  updateService: async (id: string, data: unknown) => {
    const response = await apiClient.put(`/admin/services/${id}`, data);
    return response.data;
  },

  deleteService: async (id: string) => {
    const response = await apiClient.delete(`/admin/services/${id}`);
    return response.data;
  },

  // Staff Management
  getAllStaff: async () => {
    const response = await apiClient.get('/admin/staff');
    return response.data;
  },

  createStaff: async (data: unknown) => {
    const response = await apiClient.post('/admin/staff', data);
    return response.data;
  },

  updateStaff: async (id: string, data: unknown) => {
    const response = await apiClient.put(`/admin/staff/${id}`, data);
    return response.data;
  },

  deleteStaff: async (id: string) => {
    const response = await apiClient.delete(`/admin/staff/${id}`);
    return response.data;
  },

  // Analytics
  getAnalytics: async () => {
    const response = await apiClient.get('/admin/analytics');
    return response.data;
  },
};