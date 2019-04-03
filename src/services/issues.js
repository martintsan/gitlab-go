import Base from './base';
import {
  isEmpty,
  extend
} from '../utils/validate'

export default class IssuesService extends Base {
  static async getProjectIssues(options) {
    let url = `${this.baseUrl}/projects/${options.pid}/issues`;
    options = extend({
      state: 'opened',
      order_by: 'created_at',
      sort: 'desc'
    }, options);

    let params = {
      method: 'GET',
      data: options
    }
    return await this.doAPI(url, params, true);
  }
}
