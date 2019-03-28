import wepy from 'wepy';

export default class ui {
  static isLoading = false;

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
    }
  }
}
