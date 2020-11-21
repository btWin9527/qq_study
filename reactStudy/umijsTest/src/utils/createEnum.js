/**
 * @method 枚举定义工具
 * 示例：
 * const STATUS = createEnum({
 *     KENYA:   [1, 'ke'],
 *     UGANDA:  [2, 'ug'],
 *     NIGERIA: [3, 'ng']
 * })
 * 获取枚举值：STATUS.KENYA   1
 * 获取枚举描述：STATUS.getDesc('KENYA')   ke
 * 通过枚举值获取描述：STATUS.getDescFromValue(STATUS.KENYA)    ke
 */
export default function createEnum(definition) {
  const strToValueMap = {}
  const numToDescMap = {}
  for (const enumName of Object.keys(definition)) {
    const [value, desc] = definition[enumName]
    strToValueMap[enumName] = value
    numToDescMap[value] = desc
  }
  return {
    ...strToValueMap,
    getDesc(enumName) {
      return (definition[enumName] && definition[enumName][1]) || ''
    },
    getDescFromValue(value) {
      return numToDescMap[value] || ''
    }
  }
}
