const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello There!')
})

app.listen(3000, () => {
  console.log('EJS App is listening om port 3000')
})

app.get('/', (req, res) => {
  res.render('home', { restaurant: RESTAURANT })
})

app.get('/menu', (req, res) => {
  res.render('menu', { menu: RESTAURANT.menu })
})

app.get('/menu/:category', (req, res) => {
  const category = req.params.category
  const filteredMenu = RESTAURANT.menu.filter((item) => item.category)
  res.render('category', {
    menuItems: filteredMenu,
    category: category.charAt(0).toUpperCase() + category.slice(1)
  })
})
