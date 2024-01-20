import { Component } from './../component.js';
import { BaseComponent } from '../component.js';

export interface Composable {
  addChild(child: Component): void;
}
type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer;
};

export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer
{
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="item">
    <section class="page-item__body"></section>
    <div class="page-item__controls">
     <button class="close">x</button>
    </div>
  </li>`);

    const closeBtn = this.element.querySelector('.close')! as HTMLDivElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      '.page-item__body'
    )! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>');
  }
  addChild(child: Component) {
    const pageItem = new this.pageItemConstructor();
    pageItem.addChild(child);
    pageItem.attachTo(this.element, 'beforeend');
    pageItem.setOnCloseListener(() => {
      pageItem.removeFrom(this.element);
    });
  }
}
