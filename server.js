const express = require('express')
const app = express()


// MIDDLEWARE  
app.use(express.json())

const turtles = [
    {name: "Leonardo", role: "Ninja", weapon: 'Katana'},
    {name: "Michaelangelo", role: "Ninja", weapon: 'Nunchaku'},
    {name: "Donatello", role: "Ninja", weapon: 'Bo'},
    {name: "Raphael", role: "Ninja", weapon: 'Sai'},
]




app.get('/', (req, res) => {
    res.json({response: 'Gello World'})
})

app.get('/turtles', (req, res) => {
    res.json(turtles)
})

app.get('/turtles/:index', (req, res) => {
    //in order to grab the index from the "/turtles/:index" we do req.params.index
    res.json(turtles[req.params.index])
})






app.listen(4000, () => {
    console.log('Listening on port 4000')
})