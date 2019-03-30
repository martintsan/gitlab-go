import Base from './base';

export default class UsersService extends Base {
  static async getUser(token, navLoading) {
    let url = `${this.baseUrl}/user`;
    let params = {
      method: 'GET',
      headers: {
        'PRIVATE-TOKEN': token
      },
      navLoading: navLoading
    }
    return await this.doAPI(url, params);
  }
}
