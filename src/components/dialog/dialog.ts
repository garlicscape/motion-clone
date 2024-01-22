import { BaseComponent, Component } from '../component.js';
import { Composable } from '../page/page.js';

type onCloseListener = () => void;
type onSubmitListener = () => void;

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  private closeListener?: onCloseListener;
  private submitListener?: onSubmitListener;

  constructor() {
    super(`<dialog class="dialog">
            <div class="dialog__container">
              <button class="close">X</button>
              <div id="dialog__body"></div>
              <button class="dialog__submit">Add</button>
            </div>
          </dialog>`);

    const closeBtn = this.element.querySelector('.close')! as HTMLElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
    const submitBtn = this.element.querySelector(
      '.dialog__submit'
    )! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  setOnCloseListener(listener: onCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: onSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component): void {
    const body = this.element.querySelector('#dialog__body')! as HTMLElement;
    child.attachTo(body);
  }
}
