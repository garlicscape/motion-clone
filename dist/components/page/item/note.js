import { BaseComponent } from './../../component.js';
export class NoteComponent extends BaseComponent {
    constructor(title, content) {
        super(`<section class="note">
            <h2 class="page-item__title note__title"></h2>
            <p class="note__content"></p>
           </section>`);
        const titleElement = this.element.querySelector('.note__title');
        titleElement.textContent = title;
        const contentElement = this.element.querySelector('.note__content');
        contentElement.textContent = content;
    }
}
