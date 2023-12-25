let express = require('express');
let app = express();

console.log("Hello World");

/* app.get("/", (req, res) => {
    res.send("Hello Express");
})
 */

app.use("/public", express.static(__dirname + "/public"))

const indexPath = __dirname + '/views/index.html'

app.get("/", (req, res) => {
    res.sendFile(indexPath)
})

app.get("/json", (req, res) => {
    res.send({'message': "Hello json"})
})
































 module.exports = app;
