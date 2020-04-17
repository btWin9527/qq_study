const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);

const ObjectId = mongoose.Schema.Types.ObjectId;

/*
@description
Schema 接收一个 JavaScript 对象来描述我们需要的数据结构和对应的数据类型，
除了我们熟知的像 String、Number 等数据类型外，ObjectId 是一个特殊的数据类型，
我们用它来定义我们的单个 MongoDB 文档的主键，用于标志存储数据的唯一性。
我们还可以看到，在我们的 productSchema 中，manufacturer 数据结构我们定义了一个 ref 属性，
这是 MongoDB 为我们提供的类似关系数据库的外键功能，允许我们创建一对多的数据文档，
所以 productSchema 的 manufacturer 属性对应着的数据类型为一条 Manufacturer 记录
* */
const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: {type: ObjectId, ref: 'Manufacturer'}
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
});

const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = {Product, Manufacturer};
