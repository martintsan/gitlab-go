import wepy from 'wepy';

export default class ui {
  static isLoading = false;

  static navLoading() {
    if (!this.isLoading) {
      this.isLoading = true;
      wepy.showNavigationBarLoading();
    }
  }

  static loading() {
    if (!this.isLoading) {
      this.isLoading = true;
      wepy.showLoading({
        title: 'Loading...'
      });
    }
  }

  static loaded() {
    if (this.isLoading) {
      this.isLoading = false;
      wepy.hideLoading();
      wepy.hideNavigationBarLoading();
    }
  }

  static showErrorMsg(message) {
    wepy.showModal({
      title: '错误消息 / Error Msg',
      content: message,
      showCancel: false
    });
  }
}
