export default class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr;
    // 指针开始坐标
    this.pos = 0;
    // 指针结束坐标
    this.tail = templateStr;
  }
  // 走过指定内容
  scan(tag) {
    if (this.tail.indexOf(tag) === 0) {
      // tag的长度 = 指针后移的位数
      this.pos += tag.length;
      this.tail = this.templateStr.substr(this.pos);
    }
  }

  // 令指针扫码，知道遇到指定内容结束，并且返回结束前路过的文字
  scanUtil(stopTag) {
    // 记录执行方法pos的值
    const POS_BACKUP = this.pos;
    while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
      this.pos++;
      // 改变尾部记录
      this.tail = this.templateStr.substr(this.pos);
    }
    return this.templateStr.substring(POS_BACKUP, this.pos);
  }
  // 指针是否到头
  eos() {
    return this.pos >= this.templateStr.length;
  }
}
