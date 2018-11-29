import originAXIOS from 'axios'
import * as config from 'api/config'
// import { router } from '../../router/index'
// import { compareTime } from 'common/js/util'


export function axiosGET(url, data) {
  return originAXIOS.get(config.HOST + url + param(data))
    .then(function (response) {
      // if(response.data.Code !== 0){
      //   return Promise.reject(response);
      // }else{
        return Promise.resolve(response);
      // }
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}

export function axiosPOST(url, data) {
  return originAXIOS.post(config.HOST + url + param(data))
    .then(function (response) {
      // if(response.data.Code !== 0){
      //   return Promise.reject(response);
      // }else{
        return Promise.resolve(response);
      // }
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}

export function axiosUpLoad(url, data) {
  let imgConfig = {
    headers: {'Content-Type': 'multipart/form-data'}
  }
  return originAXIOS.post(config.HOST + url, data, imgConfig)
          .then(response => {
            if (response.data.Code !== 0) {
              return Promise.reject(response);
            }else{
              return Promise.resolve(response);
            }
          })
          .catch(function (error) {
            return Promise.reject(error);
          });
}

function param(data){
  let url = '';
  for(let k in data){
    let value = data[k] !== undefined ? data[k] : '';
    url += `&${k}=${encodeURIComponent(value)}`;
  }

  return url ? "?" + url.substring(1) : '';
}
