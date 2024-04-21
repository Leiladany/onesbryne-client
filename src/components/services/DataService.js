const API_URL = import.meta.env.VITE_API_URL;

const DataService = {
  async fetchData(endpoint) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`);
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },

  async createData(endpoint, data) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error creating data:", error);
      throw error;
    }
  },

  async updateData(endpoint, data) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  },

  async deleteData(endpoint) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Network response was not ok");
      }
      return { status: response.status, message: "Delete successful" };
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    }
  },
};

export default DataService;
