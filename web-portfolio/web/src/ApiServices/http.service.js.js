import axios from "axios";

const errorCallBack = (error) => {
  return Promise.reject(error);
};

axios.interceptors.request.use((req) => {
  const user = JSON.parse(
    localStorage.getItem("portfolio-web") || "null"
  );

  req.headers["x-auth-token-user"] =
    localStorage.getItem("token-webPortfolio");

  req.headers["x-auth-language"] = "English";
  req.headers["x-auth-user-type"] = user?.userType || "user";

  return req;
});

axios.interceptors.response.use(null, errorCallBack);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};