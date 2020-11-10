import axios from 'axios';

export default class TimeService {
  baseUrl = 'http://localhost:3001/projects';

  async readAll(projectId) {
    const response = await axios.get(`${this.baseUrl}/${projectId}`);
    return response.data;
  }

  async create(payload, projectId) {
    await axios.post(`${this.baseUrl}/${projectId}/times`, payload);
  }

  async delete(projectId, id) {
    await axios.delete(`${this.baseUrl}/${projectId}/times/${id}`);
  }
}