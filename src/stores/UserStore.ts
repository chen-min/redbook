import {request} from '../utils/request';
import {save} from '../utils/storage';
import {action, flow} from 'mobx';

class UserStore {
  userInfo: any;

  setUserInfo = (info: any) => {
    this.userInfo = info;
  };
  login = flow(function* (
    this: UserStore,
    phone: string,
    pwd: string,
    callback: (success: boolean) => void,
  ) {
    try {
      const params = {
        name: phone,
        pwd: pwd,
      };
      const {data} = yield request('login', params);
      if (data) {
        save('userInfo', JSON.stringify(data));
        this.userInfo = data;
        callback?.(true);
      } else {
        this.userInfo = null;
        callback?.(false);
      }
    } catch (error) {
      this.userInfo = null;
      callback?.(false);
    } finally {
    }
  });
}

export default new UserStore();
