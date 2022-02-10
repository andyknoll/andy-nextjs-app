// AndyApp.js

class AndyApp {
    constructor() {
        this.name = "andyApp";
        this.author = "Andy Knoll";
        this.version = "1.0.0";
        this.counter = 0;

        this.videos = [
            {name: "Hollywood Orchestra", url: "https://www.youtube.com/watch?v=wfN8z4LCP4Q", author: "East West"},
            {name: "Visual Overload", url: "https://www.youtube.com/watch?v=90x2xX3rjuo", author: "Andy Knoll"},
            {name: "Best of Beatclub", url: "https://www.youtube.com/watch?v=InQ44lgY1gw", author: "Beatclub"},
            {name: "RIT Sports Zone", url: "https://youtu.be/nw_FYcd8xSw", author: "Andy Knoll"}
        ]
    }

    incrCounter() {
        console.log("INSIDE AndyApp.incrCounter BEFORE: " + this.counter);
        this.counter += 1;
        console.log("INSIDE AndyApp.incrCounter  AFTER: " + this.counter);
    }
    
    decrCounter() {
        this.counter--;
        console.log("INSIDE AndyApp.decrCounter: " + this.counter);
    }
    
}

const andyApp = new AndyApp();

export default andyApp;
