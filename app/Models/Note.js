import { generateId } from "../Utils/generateId.js"



export class Note {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.date = data.date

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



}