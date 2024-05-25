const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = (token) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
});

const handleResponse = async (response) => {
  if (!response.ok) {
    let errData;
    try {
      errData = await response.json();
    } catch {
      throw new Error('Network response was not ok');
    }
    throw new Error(errData.message || 'Network response was not ok');
  }
  return await response.json();
};

const DataService = {
  async fetchData(endpoint, token) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: getAuthHeaders(token),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  async createData(endpoint, data) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error('Error creating data:', error);
      throw error;
    }
  },

  async updateData(endpoint, data, token) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        headers: getAuthHeaders(token),
        body: JSON.stringify(data),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  },

  async deleteData(endpoint, token) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'DELETE',
        headers: getAuthHeaders(token),
      });
      if (!response.ok) {
        let errData;
        try {
          errData = await response.json();
        } catch {
          throw new Error('Network response was not ok');
        }
        throw new Error(errData.message || 'Network response was not ok');
      }
      return { status: response.status, message: 'Delete successful' };
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  },
};

export default DataService;
