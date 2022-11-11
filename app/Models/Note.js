import { generateId } from "../Utils/generateId.js"



export class Note {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.date = data.date

    }

    get listTemplate() {
        return `
    <div class="col-6 p-2 card bg-light text-dark" style="--bs-bg-opacity: .5;">${this.name}</div>
    `
    }



}