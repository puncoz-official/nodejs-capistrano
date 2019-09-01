const express = require("express")

// Init app
const app = express()

// root routes
app.get("/", (req, res) => {
    res.send("Hello world!")
})

// Start server on port
const port = 8001
app.listen(port, () => {
    console.log("Server started on port: " + port)
})