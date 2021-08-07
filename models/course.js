const {Schema, model} = require('mongoose')
const { stringify } = require('uuid')

const course = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String, 
    required: false
  }


})

module.exports = model('Course', course)