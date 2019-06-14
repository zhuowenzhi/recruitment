const express = require('express')
const mongoose = require('mongoose')
const app = express()

// 连接mongo并且使用imooc集合
const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('monfo connect success')
})
// 类似于mysql的表mongo里面有文档，字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
}))
// 新增数据
// User.create({
//   user: '卓文智',
//   age: 18
// }, function(err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })
// 删除数据
User.remove({age: 0}, function(err, doc) {
  console.log(doc)
})
User.update({'user':'卓文智'},{'$set':{age:24}},function(err,doc) {
  console.log(doc)
  
})
app.get('/', function(req, res) {
  res.send('<h1>Hello word</h1>')
})

app.get('/data', function(req, res) {
  User.findOne({'age':'24'}, function(err,doc) {
    res.json(doc)
  })
})


app.listen(9093, function() {
  console.log(`Node app start at 9093`)
})