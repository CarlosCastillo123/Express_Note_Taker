//Importing Express
const express = require("express")
//Importing api rputes
const api = require("./routes/apiRoutes")
//Importing html routes
const html = require("./routes/htmlRoutes")
//Initializing express
const app = express()
//Create port for deployed app or use local port
const PORT = process.env.PORT || 3003
//Serves all files from public folder to express
app.use(express.static("public"))
//Post request
app.use(express.urlencoded({extended: true}))
//Translate data to json format
app.use(express.json())
//Adds prefix to api route, calls the api routes to be used in express on server file
app.use("/api", api)
//Calls html route to be used with express
app.use("/", html)

app.listen(PORT, function(){
    console.log(`App is listening on Port: ${PORT}`)
})