const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
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
  async fetchData(endpoint) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
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
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error('Error creating data:', error);
      throw error;
    }
  },

  async updateData(endpoint, data) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  },

  async deleteData(endpoint) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
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
