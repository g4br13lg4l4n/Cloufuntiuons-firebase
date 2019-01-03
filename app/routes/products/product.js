
module.exports = router => {
  //get productos
  router.get('/products', (req, res, next) => {
    Product.find({})
      .then( result => {
        res.status(200).json({ data : { result }, status: 200 })
      })
      .catch(err => {
        res.status(500).json({ data : { err }, status: 500 })
      })
  })

  //save productos
  router.post('/product', (req, res, next) => {
    product = new Product(req.body)
    product.save()
      .then( result => {
        res.status(200).json({ data : { result }, status: 200 })
      })
      .catch(err => {
        res.status(500).json({ data : { err }, status: 500 })
      })
  })
  
}