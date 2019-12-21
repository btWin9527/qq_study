let express = require("express");
let app = express();
app.get("/api/user", (req, res) => {
  res.json({name: 'aaa'})
})
app.get("/user", (req, res) => {
  res.json({name: 'bbb'})
})
app.listen(3000, function () {
  console.log('服务启动')
})
