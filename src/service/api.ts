/* eslint-disable prettier/prettier */

class ApiService {
  constructor(private apiURL: string) {}

  async get(endpoint: string) {
    const response = await fetch(this.apiURL + endpoint);
    const data = await response.json();

    return data;
  }

  async post(endpoint: string, body: any) {
    const response = await fetch(this.apiURL + endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({ 'content-type': 'application/json' })
    });
    const data = await response.json();

    return data;
  }

  async put(endpoint: string, body: any) {
    const response = await fetch(this.apiURL + endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: new Headers({ 'content-type': 'application/json' })
    });
    const data = await response.json();

    return data;
  }

  async delete(endpoint: string) {
    await fetch(this.apiURL + endpoint, { method: 'DELETE' });
  }
}

export const apiService = new ApiService(
  'https://recycrew-web-service.onrender.com'
);
