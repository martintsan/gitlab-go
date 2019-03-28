import Base from './base';

export default class ProjectsService extends Base {
  static async getUserProjects() {
    let url = `${this.baseUrl}/projects`;
    let params = {
      method: 'GET',
      data: {
        membership: true,
        order_by: 'last_activity_at'
      }
    }
    return await this.doAPI(url, params, true);
  }
}
