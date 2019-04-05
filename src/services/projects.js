import Base from './base';
import {
  isEmpty,
  extend
} from '../utils/validate'

export default class ProjectsService extends Base {
  static async getProjects(options) {
    let url = `${this.baseUrl}/projects`;
    let needAuth = options.needAuth;
    delete options.needAuth;
    options = extend({
      membership: false,
      order_by: 'last_activity_at'
    }, options);

    let params = {
      method: 'GET',
      data: options
    }
    return await this.doAPI(url, params, needAuth);
  }

  static async getProjectDetail(options) {
    let url = `${this.baseUrl}/projects/${options.pid}`;
    let params = {
      method: 'GET',
      data: {
        statistics: true
      }
    }
    return await this.doAPI(url, params, true);
  }

  static async getProjectReadme(options) {
    let url = `${this.baseUrl}/projects/${options.pid}/repository/files/README.md/raw`;
    let params = {
      method: 'GET',
      data: {
        ref: 'master'
      }
    }
    return await this.doAPI(url, params, true);
  }

  static async getProjectLabels(options) {
    let url = `${this.baseUrl}/projects/${options.pid}/labels`;
    let params = {
      method: 'GET'
    }
    return await this.doAPI(url, params, true);
  }
}
