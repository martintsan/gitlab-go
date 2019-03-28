import Base from './base';

export default class UsersService extends Base {
  static async getUser() {
    let url = `${this.baseUrl}/user`;
    let params = {
      method: 'GET'
    }
    return await this.doAPI(url, params, true);
  }
}
