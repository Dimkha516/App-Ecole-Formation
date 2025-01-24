import axios from "axios";

export default class DataHandler {
  static api = axios.create({
    baseURL: "http://localhost:5000/datas",
  });

  //   static interceptors = () => {
  //     this.api.interceptors.request.use(
  //       (config) => {
  //         const token = localStorage.getItem("token");
 
  //         if (token) {
  //           config.headers["Authorization"] = `Bearer ${token}`;
  //         }

  //         return config;
  //       },
  //       (error) => {
  //         // Handle the request error here
  //         return Promise.reject(error);
  //       }
  //     );
  //   };

  static getDatas = async (url) => {
    try {
      const response = await this.api.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static postDatas = async (url, data) => {
    try {
      const response = await this.api.post(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
