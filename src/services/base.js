import wepy from 'wepy';
import api from '../utils/api';
import { BASEURL, HTTP_METHODS } from '../utils/constants';
import ui from '../utils/ui';
import * as _ from 'lodash';

export default class Base {
  static baseUrl = BASEURL;

  static async doAPI(url, params, needAuth) {
    if (params['navLoading']) {
      ui.navLoading();
    } else {
      ui.loading();
    }
    try {
      if (!params && params.method) {
        throw 'HTTP method has not been defined yet.';
      }
      if (!params.method.match(HTTP_METHODS)) {
        throw `HTTP method ${params.method} is invalid.`;
      }
      params.method = params.method.toUpperCase();
      let privateToken = wepy.getStorageSync(
        'GITLAB_PRIVATE_TOKEN'
      );
      if (needAuth && privateToken) {
        params.headers = _.extend(params.headers, {
          'PRIVATE-TOKEN': privateToken
        });
      }
      let resp = await api.request(url, params);
      return {
        status: resp.statusCode === 200 || resp.statusCode === 201,
        header: resp.header,
        data: resp.data
      };
    } catch (e) {
      ui.loaded();
      return e;
    }
  }
}
