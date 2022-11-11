import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";



function _drawNotes() {
    let template = ''
    appState.notes.forEach(n => template += n.listTemplate)
    setHTML('notes-list', template)
}



export class NotesController {
    constructor() {
        console.log('test controller');

        appState.on('notes', _drawNotes)


        _drawNotes()
    }


    createNote() {
        window.event.preventDefault()
        let form = window.event.target
        let formData = getFormData(form)
        console.log(formData);
        notesService.createNote(formData)
        form.reset()



    }

    setActiveNote(noteId) {
        notesService.setActiveNote(noteId)
        let activeNote = appState.activeNote

        console.log('activeNote', activeNote);

        setHTML('active-note', activeNote.activeNoteTemplate)
    }


    saveNote() {
        window.event.preventDefault()
        let form = window.event.target
        let formData = getFormData(form)
        console.log(formData);
        notesService.saveNote(formData)



    }

}