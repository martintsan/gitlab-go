import wepy from 'wepy';
import api from '../utils/api';
import {
  BASEURL,
  HTTP_METHODS
} from '../utils/constants';
import ui from '../utils/ui';

export default class Base {
  static baseUrl = BASEURL;

  static async doAPI(url, params, needAuth) {
    UI.loading();
    try {
      if (!params && params.method) {
        throw "HTTP method has not been defined yet.";
      }
      if (!HTTP_METHODS.test(params.method)) {
        throw `HTTP method ${params.method} is invalid.`;
      }
      params.method = params.method.toUpperCase();
      if (needAuth) {
        params.headers['PRIVATE-TOKEN'] = wepy.getStorageSync('GITLAB_PRIVATE_TOKEN');
      }
      let resp = api.request(url, params);
      return await resp;
    } catch (e) {
      return e;
    }
  }
}
