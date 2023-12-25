let express = require('express');
let app = express();
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

const indexPath = __dirname + '/views/index.html'

app.get("/", (req, res) => {
    res.sendFile(indexPath)
})

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.send({'message': "Hello json".toUpperCase()})
    }else{
        res.send({'message': "Hello json"})
    }
})
































 module.exports = app;
