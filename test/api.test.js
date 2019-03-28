import {
  describe,
  it
} from 'mocha';
import {
  expect
} from 'chai';
import sinon from 'sinon';
import wepy from 'wepy';
import api from '../src/utils/api';
import initGlobal from './fakewx';
import App from './fake/app';

initGlobal();

describe('API Class', () => {
  let appConfig = wepy.$createApp(App, true);
  let app = appConfig.$app;

  it("wx instance", () => {
    expect(app.$wxapp.app)
      .to.equal('app');
  })

  it("Can do GET request", async () => {
    let url = 'https://jobs.github.com/positions.json?search=node';
    let get = api.get.bind(api);
    let result = await get(url);
    expect(result.data)
      .to.have.length(25);
  })
})
