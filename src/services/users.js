import Base from './base';

export default class UsersService extends Base {
  static async getUser(token) {
    let url = `${this.baseUrl}/user`;
    let params = {
      method: 'GET',
      headers: {
        'PRIVATE-TOKEN': token
      }
    }
    return await this.doAPI(url, params);
  }
}
