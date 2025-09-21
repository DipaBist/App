import express from "express"
import { createNote,getNotes,updatedNote,deleteNote } 
from "../controllers/note.controller.js"

const router= express.Router()

router.post("/create-note", createNote)
router.get("/get-notes", getNotes)
router.put("/update-note/:id", updatedNote)
router.delete("/delete-note/:id", deleteNote)
export default router