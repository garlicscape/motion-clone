import { Component } from './components/component.js';
import {
  InputDialog,
  MediaData,
  TextData,
} from './components/dialog/dialog.js';
import { MediaSecionInput } from './components/dialog/input/media-input.js';
import { TextSecionInput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from './components/page/page.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaSecionInput>(
      '#new-image',
      MediaSecionInput,
      (input: MediaSecionInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<MediaSecionInput>(
      '#new-video',
      MediaSecionInput,
      (input: MediaSecionInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSecionInput>(
      '#new-note',
      TextSecionInput,
      (input: TextSecionInput) => new NoteComponent(input.title, input.body)
    );

    this.bindElementToDialog<TextSecionInput>(
      '#new-todo',
      TextSecionInput,
      (input: TextSecionInput) => new TodoComponent(input.title, input.body)
    );
  }
  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const section = makeSection(input);
        this.page.addChild(section);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
