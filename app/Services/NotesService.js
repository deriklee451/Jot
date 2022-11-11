import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { saveState } from "../Utils/Store.js";



class NotesService {

    createNote(formData) {
        let newNote = new Note(formData)
        appState.notes = [...appState.notes, newNote]
        saveState('Notes', appState.notes)

    }

    setActiveNote(noteId) {
        let foundNote = appState.notes.find(n => n.id == noteId)
        console.log("foundPlayer");
        appState.activeNote = foundNote

    }


}

export const notesService = new NotesService