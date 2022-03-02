const fs = require('fs')
const router = require("express").Router()
const db = require('../db/db.json')
const uuid = require('../helpers/uuid')
router.get("/notes", (req, res) => {
   res.json(db)
})
router.post("/notes", (req, res) => {
    
    // Destructures object to remove title and text properties
    const {title, text} = req.body
    // Combines properties into new object
    if (req.body) {
        const newNote = {
          text,
          title,
          note_id: uuid(),
        };
        // Combines properties into new object
   // const newNote = {title, text}
    //adds new note to db array
    db.push(newNote)
    //rewrites db file 
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    
    //return db 
    res.json(db)
    }
})
module.exports = router