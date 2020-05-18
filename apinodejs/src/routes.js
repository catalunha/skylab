const express = require('express')
const routes = express.Router()
const ProductController = require('./controllers/ProductControllers')

//Rotas
routes.get('/products',ProductController.index)
routes.get('/products/:id',ProductController.show)
routes.post('/products',ProductController.store)
routes.put('/products/:id',ProductController.update)
routes.delete('/products/:id',ProductController.destroy)



// (request, response) => {
//   // Product.create({
//   //   title:'React native',
//   //   description:'Build native apps with React',
//   //   url:'http://github.com/facebook/react-native',
//   // })
//   response.send('Hello Brintec...:-)')
// }
module.exports = routes