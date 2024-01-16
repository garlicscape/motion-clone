import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image', 'https://picsum.photos/200');
    image.attachTo(appRoot, 'beforeend');

    const video = new VideoComponent('video', 'https://youtu.be/6HVYX8FRSGA');
    video.attachTo(appRoot, 'beforeend');

    const note = new NoteComponent('note', 'this is note content~!');
    note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('todo', 'today todo');
    todo.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
