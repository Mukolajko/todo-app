//service to hold all http methods
import Vue from 'vue';

export default {
  Get (url) {
    return new Promise((resolve, reject) => {
      Vue.http.get(url)
        .then(response => {
            resolve(response);
          },
          (error) => {
            reject(error);
          });
    });
  },
  Post (url, bodyData) {
    return new Promise((resolve, reject) => {
      Vue.http.post(url, bodyData)
        .then(response => {
            resolve(response);
          },
          (error) => {
            reject(error);
          });
    });
  },
  Put (url, bodyData) {
    return new Promise((resolve, reject) => {
      Vue.http.put(url, bodyData)
        .then(response => {
            resolve(response);
          },
          (error) => {
            reject(error);
          });
    });
  }
}
