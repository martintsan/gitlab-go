import wepy from 'wepy';

export default class api {
  static async request(url, options = {
    header: {},
    data: {}
  }) {
    let param = {
      url: url,
      method: options.method,
      header: options.headers,
      data: options.data
    };
    try {
      let resp = await wepy.request(param);
      if (typeof(resp.data) === 'string') {
        resp.data = JSON.parse(JSON.stringify(resp.data).replace(/\u00A0|\u2028|\u2029|\uFEFF/g, ''));
      }
      return resp;
    } catch (e) {
      this.requestException(e);
    }
  }

  /**
   * 异常
   */
  static requestException(res) {
    const error = {};
    if (res) {
      error.message = res.message;
    }
    throw error;
  }
}
