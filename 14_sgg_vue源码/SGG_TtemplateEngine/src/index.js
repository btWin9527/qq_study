import Scanner from "./Scanner.js";
window.SSG_TemplateEngine = {
  render(templateStr, data) {
    // 实例化扫描器
    var scanner = new Scanner(templateStr);
    var word;
    while (!scanner.eos()) {
      word = scanner.scanUtil("{{");
      console.log(word);
      scanner.scan("{{");
      word = scanner.scanUtil("}}");
      console.log(word, "word");
      scanner.scan("}}");
    }
  },
};
