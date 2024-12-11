const express = require("express")
const path = require("path")
const dirName = path.resolve()
const app = express()

app.use(express.static(path.join(dirName, "WebpackTest")))
app.listen(3000)