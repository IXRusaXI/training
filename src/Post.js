export default class Post {
    constructor(title) {
        this.title = title
    }

    toString() {
        return JSON.stringify(this)
    }
}