import axios from "axios";

/**
 * @class Api
 * @description Contains methods for making asynchronous Http requests
 * @exports Api
 */

const BASE_URL = "https://mobile.creditclan.com/webapi/v1";

class BankApi {
  static ENDPOINTS = {
    url: BASE_URL,
  };

  /**
   * @method get
   * @description makes a GET request
   * @param {string} url The request url
   * @param {object} data The request params
   * @returns {object} request reponse in JSON format
   */

  /**
   * @method post
   * @description makes a POST request
   * @param {string} url The request url
   * @param {object} data The request params
   * @returns {object} request reponse in JSON format
   */

  static async post(url, data) {
    try {
      const res = await axios({
        method: "post",
        url,
        data,
        headers: { "x-api-key": "z2BhpgFNUA99G8hZiFNv77mHDYcTlecgjybqDACv" },
      });

      return res.data;
    } catch (err) {
      if (!err.response) return "Network Error";
      return err.response.data;
    }
  }

  static async get(url) {
    try {
      const res = await axios({
        method: "get",
        url,
        headers: { "x-api-key": "z2BhpgFNUA99G8hZiFNv77mHDYcTlecgjybqDACv" },
      });

      return res.data;
    } catch (err) {
      if (!err.response) return "Network Error";
      return err.response.data;
    }
  }
}

export default BankApi;
