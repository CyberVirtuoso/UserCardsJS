import UserBlock from "./users-block.js"

export default class App {
    #usersBlock
    constructor() {
        this.#usersBlock = new UserBlock();
    }

    run() {
        this.#usersBlock.showUsers();
    }

}