import wepy from 'wepy';

export default class api {
  static async request(method, url, options = {}) {
    let param = {
      url: url,
      method: method,
      header: options.headers || {},
      data: options.data || {}
    };
    try {
      let resp = await wepy.request(param);
      if (typeof(resp.data) === 'string') {
        resp.data = JSON.parse(JSON.stringify(resp.data).replace(/\u00A0|\u2028|\u2029|\uFEFF/g, ''));
      }
      return resp;
    } catch (e) {
      console.error('Error:', e);
      // this.requestException(e);
    }
  }

  /**
   * 异常
   */
  static requestException(res) {
    const error = {};
    if (res) {
      error.statusCode = res.statusCode;
      const wxData = res.data;
      const serverData = wxData;
      if (serverData) {
        error.serverCode = wxData;
        error.message = res.errMsg;
        error.serverData = serverData;
      }
    }
    return error;
  }

  static get(url, options) {
    return this.request('GET', url, options)
  }

  static put(url, options) {
    return this.request('PUT', url, options)
  }

  static post(url, options) {
    return this.request('POST', url, options)
  }

  static patch(url, options) {
    return this.request('PATCH', url, options)
  }

  static delete(url, options) {
    return this.request('DELETE', url, options)
  }
}
