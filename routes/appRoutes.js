const { route } = require('express/lib/application');
const res = require('express/lib/response');

const router = require('express').Router();

/*
get routes
*/
router.get('/', (req, res) => {
    res.status(200).render('index')
});















/*
post routes
*/
router.post('/contact', (req, res) => {
    console.log(req.body)
    res.status(200).json({ message: req.body })
})


module.exports = router;
