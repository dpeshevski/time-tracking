import axios from 'axios';

export default class ProjectService {
  baseUrl = 'http://localhost:3001';

  async readAll() {
    const response = await axios.get(`${this.baseUrl}/projects`);
    return response.data;
  };

  async read(id) {
    const response = await axios.get(`${this.baseUrl}/projcets/${id}`);
    return response.data;
  };

  async create(payload) {
    await axios.post(`${this.baseUrl}/projects`, payload);
  };

  async update(payload, id) {
    await axios.put(`${this.baseUrl}/projects/${id}`, payload);
  };

  async delete(id) {
    await axios.delete(`${this.baseUrl}/projects/${id}`);
  };
}
