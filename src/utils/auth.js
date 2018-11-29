import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token-Mobile';

export function getToken() {
  // 从浏览器数据库中获取token
  const localUser = localStorage.getItem(TokenKey);
  if(!!localUser && localUser.indexOf('TokenKey') >= 0){
    Cookies.set(TokenKey, JSON.parse(localUser).TokenKey);
  }
  return Cookies.get(TokenKey)
}

export function setToken(token) {
    const User = {
      TokenKey: token,
      time: new Date()  
  };
  const localUser = localStorage.getItem(TokenKey);
  if(!localUser){
    localStorage.setItem(TokenKey,JSON.stringify(User));
  }
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  localStorage.removeItem(TokenKey);  
  return Cookies.remove(TokenKey)
}
