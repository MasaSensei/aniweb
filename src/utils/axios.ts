import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  timeout: 10000,
});

// Karena Jikan API punya rate limit (3 request per detik),
// kita bisa tambah interceptor buat handle error 429 (Too Many Requests)
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 429) {
      // Tunggu 1 detik lalu coba lagi (simple retry)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return axiosInstance(error.config);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
