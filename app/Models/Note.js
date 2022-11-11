import { generateId } from "../Utils/generateId.js"



export class Note {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.date = data.date
        this.report = data.report || ''

    }

    get listTemplate() {
        return `
        <div class=" mx-3 p-2 selectable" onclick="app.notesController.setActiveNote('${this.id}')">
        <div class="row">
          <div class="col-7 card">${this.name}</div>
        </div>
      </div>
    `
    }

    get activeNoteTemplate() {
        return `
        <form onsubmit="app.notesController.saveNote()">
        <div>
            <button class="btn btn-info" onclick="app.notesController.saveNote"><i class="mdi mdi-pencil"></i></button>
            <button class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
        </div>
        <div class="col-12 text-center text-light">${this.name}</div>

        <textarea class="col-12 report" name="report" id="report" cols="30" rows="10">
        ${this.report}
        </textarea>
        </form>
        </div>
        
        `



    }



}