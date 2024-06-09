import { BaseComponent } from '../../component.js';
export class TodoComponent extends BaseComponent {
    constructor(title, content) {
        super(`<section class="todo">
        <h2 class="page-item__title todo__title"></h2>
        <input type="checkbox" id="todo__checkbox">
        <label for="todo__checkbox" class="todo-label"></label>
        </section>`);
        const titleElement = this.element.querySelector('.todo__title');
        titleElement.textContent = title;
        const todoElement = this.element.querySelector('.todo-label');
        todoElement.insertAdjacentText('afterend', content);
    }
}
