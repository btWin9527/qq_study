import createEnum from "../utils/createEnum";

export default Object.freeze({
  "signature": "E6AgEAAkEAno2nAMc3b", // 密码加签
})

// 国家枚举
export const COUNTRY_CONFIG = createEnum({
  KENYA: [1, 'ke'],
  UGANDA: [2, 'ug'],
  NIGERIA: [3, 'ng']
})
