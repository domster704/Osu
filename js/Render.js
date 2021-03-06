export default class Render {
    constructor() {
    }

    static create(...args) {
        return new Render(...args);
    }

    clear(canvas) {
        const {context} = canvas;
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}