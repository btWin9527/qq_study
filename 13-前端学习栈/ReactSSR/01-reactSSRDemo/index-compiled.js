const React = require('react');

const http = require('http'); // 服务端渲染方法


const {
  renderToString
} = require('react-dom/server'); // 组件


class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerClick() {
    alert('react ssr');
  }

  render() {
    return /*#__PURE__*/React.createElement("h1", {
      onClick: this.handlerClick
    }, "click here!");
  }

} // 创建服务


http.createServer((req, res) => {
  res.writeHead(200, {
    'content-Type': 'text/html'
  }); // 将组件转换为html

  const html = renderToString( /*#__PURE__*/React.createElement(Index, null));
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>传统 ssr</title>
      </head>
      <body>
        <div id="root">
          ${html}
        </div>
      </body>
    </html>
  `);
}).listen(9000); // 服务端监听9001端口
