let router = require('express').Router()

router.get('/', (req, res) => {
    res.render('shops/index')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('Make new shoppe')
})

router.get('/new', (req, res) => {
    res.render('shops/new')
})

router.get('/:id', (req, res) => {
    res.render('shops.show')
})

module.exports = router