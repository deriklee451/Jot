import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { loadState, saveState } from "../Utils/Store.js";



class NotesService {

    createNote(formData) {
        let newNote = new Note(formData)
        appState.notes = [...appState.notes, newNote]
        console.log("Created Note:", appState.notes)
        saveState('notes', appState.notes)


    }

    setActiveNote(noteId) {
        let foundNote = appState.notes.find(n => n.id == noteId)
        console.log("foundPlayer");
        appState.activeNote = foundNote

    }

    saveNote(newReport) {
        console.log('is this working', newReport);
        let activeNote = appState.activeNote
        activeNote.page = newReport.page
        saveState('notes', appState.notes)
        appState.emit('activeNote')

    }

    deleteNote(noteId) {
        let filteredArray = appState.notes.filter(n => n.id != noteId)
        appState.notes = filteredArray
        console.log('new array in appstate', appState.notes);
        saveState("notes", appState.notes)



    }






}

export const notesService = new NotesService