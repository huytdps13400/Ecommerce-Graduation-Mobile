export default {
  GET_TOKEN: 'GET_TOKEN',
  GET_CONFIG: 'GET_CONFIG',
  GET_BANNER: 'GET_BANNER',
  GET_TERMS_OF_USE: 'GET_TERMS_OF_USE',
  LOGIN_ACCOUNT: 'LOGIN_ACCOUNT',
  SIGNUP_ACCOUNT: 'SIGNUP_ACCOUNT',
  LOGOUT_ACCOUNT: 'LOGOUT_ACCOUNT',
  TOKEN_USER: 'TOKEN_USER',
  DEVICE_INFO: 'DEVICE_INFO',
  INTRODUCE_INFOR: 'INTRODUCE_INFOR',
  GET_CATEGORY_ALL: 'GET_CATEGORY_ALL',
  GET_CATEGORY_SUB: 'GET_CATEGORY_SUB',
  GET_USER_INFORMATION: 'GET_USER_INFORMATION',
  UPDATE_AVATAR: 'UPDATE_AVATAR',
  LOGIN_FACEBOOK: 'LOGIN_FACEBOOK',
  LOGIN_GOOGLE: 'LOGIN_GOOGLE',
  GET_CATEGORY_HOME: 'GET_CATEGORY_HOME',
  GET_PROVINCE: 'GET_PROVINCE',
  GET_DISTRICT: 'GET_DISTRICT',
  GET_WARD: 'GET_WARD',
  ADD_ADDRESS: 'ADD_ADDRESS',
  ADD_ADDRESS_DEFAULT: 'ADD_ADDRESS_DEFAULT',
  GET_PRODUCT: 'GET_PRODUCT',
  GET_PRODUCT_SALE: 'GET_PRODUCT_SALE',
  GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',
  GET_SHOP_USERS_BY_ID: 'GET_SHOP_USERS_BY_ID',
  GET_PRODUCT_DETAILS_BY_SHOP: 'GET_PRODUCT_DETAILS_BY_SHOP',
  GET_PRODUCT_BY_CATEGORY: 'GET_PRODUCT_BY_CATEGORY',
};

export function _onSuccess(action) {
  return action + '_SUCCESS';
}
export function _onFail(action) {
  return action + '_FAIL';
}
export function _onUnmount(action) {
  return action + '_UNMOUNT';
}
export function _onSearch(action) {
  return action + '_SEARCH';
}
