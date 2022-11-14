import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";



function _drawNotes() {
    let notes = appState.notes
    let template = ''
    notes.forEach(n => template += n.listTemplate)
    setHTML('notes-list', template)
    setText('notes-count', appState.notes.length)
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

    async deleteNote(noteId) {
        if (await Pop.confirm('Verifiy you want to delete this note')) {
            notesService.deleteNote(noteId)
        }
    }

}