//service to hold all http methods
import Vue from 'vue';

export default {
  Get (url) {
    return new Promise((resolve, reject) => {
      if (!url) {return reject("Bad arguments");}
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
      if (!url || !bodyData || typeof bodyData != 'object') {return reject("Bad arguments");}
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
      if (!url || !bodyData || typeof bodyData != 'object') {return reject("Bad arguments");}
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
