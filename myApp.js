let express = require('express');
let app = express();
let bodyParser =require("body-parser")
require('dotenv').config();

console.log("Hello World");

/* app.get("/", (req, res) => {
    res.send("Hello Express");
})
 */

// Middlewares

app.use("/public", express.static(__dirname + "/public"))
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next()
})
app.use(bodyParser.urlencoded({extended:false}))


const indexPath = __dirname + '/views/index.html'

app.get("/", (req, res) => {
    res.sendFile(indexPath)
})

app.get("/json", (req, res) => {
    if (process.env["MESSAGE_STYLE"] === "uppercase") {
        res.json({'message': "HELLO JSON"})
    }else{
        res.json({'message': "Hello json"})
    }
})

app.get("/now", (req, res, next) => {
    req.time = new Date().toString()
    next()    
}, (req, res) => {
    res.send({'time' : req.time})
})

app.get("/:word/echo", (req, res) => {
    const {word} = req.params
    res.json(
        {
            'echo' : word
        }
    )
})

app.get('/name', (req, res) => {
    const { first, last } = req.query
    res.json({
        'name' : `${first} ${last}`
    })    
})

app.post("/name", (req, res) => {
    const {first, last} = req.body
    res.json({
        'name' : `${first} ${last}`
    })
})

























 module.exports = app;
