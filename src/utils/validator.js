/*
 * @Author: your name
 * @Date: 2020-12-12 22:30:41
 * @LastEditTime: 2020-12-12 22:40:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lay\src\utils\validator.js
 */
export default {
  /**
   * @description:校验手机号码
   * @param {Number} phoneNum
   * @return {*}
   */
  validatorPhone: (phoneNum) => {
    const reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
    return reg.test(phoneNum);
  },
};
