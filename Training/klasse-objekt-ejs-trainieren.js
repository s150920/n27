const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', 'Training')

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Wenn localhost:3000/klasse-objekt-ejs-trainieren aufgerufen wird ...

app.get('/klasse-objekt-ejs-trainieren',(req, res, next) => {   

    // ... wird klasse-objekt-ejs-trainieren.ejs gerendert:

    res.render('klasse-objekt-ejs-trainieren', {      
        breite : rechteck.breite                                 
    })
})
class Schueler{
    constructor() {
        this.geschlecht;
        this.vorname;
        this.alter;
    }
}

class Fußballspieler{
    constructor(){
        this.name
        this.alter
        this.nummer
        this.marktwert
    }
}
class Bank{
    constructor(){
        this.laenge
        this.breite
        this.hoehe
    }
}
