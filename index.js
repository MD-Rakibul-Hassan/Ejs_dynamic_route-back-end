const express = require('express');
const path = require('path')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine','ejs');


app.get('/', (req, res) => {
    res.render("index")
})

app.get('/author/:username', (req, res) => {
    const user = req.params.username;
    res.send(`Welcom ${user}`)
})

app.listen(4000,() => console.log('Server is running...'))