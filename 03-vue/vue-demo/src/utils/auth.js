import Cookies from 'js-cookie'

const TokenKey = 'demo_ke'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function SetToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
