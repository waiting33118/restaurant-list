const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const hostname = `127.0.0.1`
const port = 3000
const restaurantList = require('./restaurant.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('home', { restaurant: restaurantList.results })
})

app.get('/restaurants/:id', (req, res) => {
	const restaurant = restaurantList.results.find(
		(item) => item.id.toString() === req.params.id
	)
	res.render('show', { restaurant })
})

app.listen(port, hostname, () => {
	console.log(`The Server is running on http://${hostname}:${port}`)
})
