let express = require('express');
let app = express();

console.log("Hello World");

/* app.get("/", (req, res) => {
    res.send("Hello Express");
})
 */

const indexPath = __dirname + '/views/index.html'

app.get("/", (req, res) => {
    res.sendFile(indexPath)
})

































 module.exports = app;
