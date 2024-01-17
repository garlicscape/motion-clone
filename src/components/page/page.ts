import { Component } from './../component.js';
import { BaseComponent } from '../component.js';

export interface Composable {
  addChild(child: Component): void;
}

class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements Composable
{
  constructor() {
    super(`<li class="item">
    <section class="page-item__body"></section>
    <div class="page-item__controls">
     <button class="close">x</button>
    </div>
  </li>`);
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      '.page-item__body'
    )! as HTMLElement;
    child.attachTo(container);
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    super('<ul class="page"></ul>');
  }
  addChild(child: Component) {
    const pageItem = new PageItemComponent();
    pageItem.addChild(child);
    pageItem.attachTo(this.element, 'beforeend');
  }
}
