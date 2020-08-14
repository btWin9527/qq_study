/*
* _.padStart([string=''], [length=0], [chars=' '])
* 如果string字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分
* [string=''] (string): 要填充的字符串。
* [length=0] (number): 填充的长度。
* [chars=' '] (string): 填充字符。
* */
import padStart from 'lodash/padStart';

const ms2Time = (milliseconds) => {
  let time = milliseconds;
  const ms = milliseconds % 1000;
  time = (milliseconds - ms) / 1000;
  const seconds = time % 60;
  time = (time - seconds) / 60;
  const minutes = time % 60;
  const hours = (time - minutes) / 60;
  const result = padStart(hours, 2, '0') + ':' + padStart(minutes, 2, '0') + ':' + padStart(seconds, 2, '0') + '.' + padStart(ms, 3, '0');
  return result;
}

export default ms2Time;
