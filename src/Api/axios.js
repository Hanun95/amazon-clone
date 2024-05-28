import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/colne-2bc23/us-central1/api",
  baseURL: "https://amazon-api-deploy-1-k80y.onrender.com/",
});
export { axiosInstance };
