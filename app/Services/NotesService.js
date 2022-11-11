import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { saveState } from "../Utils/Store.js";



class NotesService {

    createNote(formData) {
        let newNote = new Note(formData)
        appState.notes = [...appState.notes, newNote]
        console.log("Created Note:", appState.notes)
        saveState('Notes', appState.notes)


    }

    setActiveNote(noteId) {
        let foundNote = appState.notes.find(n => n.id == noteId)
        console.log("foundPlayer");
        appState.activeNote = foundNote

    }

    saveNote(newReport) {
        let activeNote = appState.activeNote
        activeNote.report = newReport.report
        saveState('activeNote', appState.activeNote)
        appState.emit('activeNote')
        console.log('is this working');

    }


}

export const notesService = new NotesService