import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./../auth/Auth";

const axiosSecure = axios.create({
  baseURL: "https://fitness-quest-server.vercel.app",
  // baseURL: "http://localhost:4000/",
});
const useAxiosAdmin = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (err) => {
      const status = err.response.status;
      if (status === 403 || status === 401) {
    navigate("/login");
        await logOut();
      }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default useAxiosAdmin;
