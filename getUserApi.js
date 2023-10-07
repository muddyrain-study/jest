/**
 * 和请求相关的
 */

const axios = require('axios');

class User {
  /**
   * 获取所有的用户
   */
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

module.exports = User;
