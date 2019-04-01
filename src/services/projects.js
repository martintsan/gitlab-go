import Base from './base';
import {
  isEmpty,
  extend
} from '../utils/validate'

export default class ProjectsService extends Base {
  static async getUserProjects(options) {
    let url = `${this.baseUrl}/projects`;
    options = extend(options, {
      membership: true,
      simple: true
    })
    if (isEmpty(options['order_by'])) {
      options['order_by'] = 'last_activity_at'
    }
    let params = {
      method: 'GET',
      data: options
    }
    return await this.doAPI(url, params, true);
  }

  static async getProjectDetail(pid) {
    let url = `${this.baseUrl}/projects/${pid}`;
    let params = {
      method: 'GET',
      data: {
        statistics: true
      }
    }
    return await this.doAPI(url, params, true);
  }

  static async getProjectReadme(pid) {
    let url = `${this.baseUrl}/projects/${pid}/repository/files/README.md/raw`;
    let params = {
      method: 'GET',
      data: {
        ref: 'master'
      }
    }
    return await this.doAPI(url, params, true);
  }
}
