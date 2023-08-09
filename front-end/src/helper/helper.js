import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

export async function register(credentials) {
  try {
    const {
      data: { msg },
    } = await axios.post(`/api/register`, credentials);

    return Promise.resolve(msg);
  } catch (error) {
    return Promise.reject({ error });
  }
}
