import { BaseComponent } from '../../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, content: string) {
    super(`<section class="todo">
        <h2 class="todo__title"></h2>
        <input type="checkbox" class="todo__checkbox">
        </section>`);

    const titleElement = this.element.querySelector(
      '.todo__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const contentElement = this.element.querySelector(
      '.todo__checkbox'
    )! as HTMLInputElement;
    contentElement.insertAdjacentText('afterend', content);
  }
}
