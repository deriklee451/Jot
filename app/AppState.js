import { Note } from "./Models/Note.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('Values', [Value])

  /** @type {import('./Models/Note').Note[]} */
  notes = [
    new Note({ name: 'random note' }),
    new Note({ name: 'random note2' })
  ]


  // NOTE this does denote what is stored in this collection, but it also gives us intellisense in our code
  /** @type {import('./Models/Note').Note[]} */
  notes = loadState('notes', [Note])





  /** @type {import('./Models/Note').Note} */
  activeNote = null

}












export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
