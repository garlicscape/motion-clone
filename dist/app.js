import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image', 'https://picsum.photos/200');
        this.page.addChild(image);
        const video = new VideoComponent('video', 'https://youtu.be/6HVYX8FRSGA');
        this.page.addChild(video);
        const note = new NoteComponent('note', 'this is note content~!');
        this.page.addChild(note);
        const todo = new TodoComponent('todo', 'today todo');
        this.page.addChild(todo);
    }
}
new App(document.querySelector('.document'));
