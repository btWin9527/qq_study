var fs = require('fs');
var express = require('express');
var multer  = require('multer')

var app = express();
var upload = multer({ dest: 'upload/' });

// 单图上传
app.post('/upload', upload.single('logo'), function(req, res, next){
  res.send({ret_code: '0'});
});


app.listen(3000);
