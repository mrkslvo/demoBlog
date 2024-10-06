const express = require("express")

const routes = express.Router()

routes.get("/home", (req,res) => {
   res.send(`<div> Hello Home </div>`)
})

routes.get("/about", (req,res) => {
   res.send(`<div> Hello About </div>`)
})
routes.get("/contact", (req,res) => {
   res.send(`<div> Hello Contact </div>`)
})

module.exports = routes