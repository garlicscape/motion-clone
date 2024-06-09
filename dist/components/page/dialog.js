import { BaseComponent } from '../component.js';
export class Dialog extends BaseComponent {
    constructor() {
        super(`<div class="dialog">
        <button class="dialog-close">Close</button>
        <button class="dialog-add">Add</button>
      </div>`);
        const imgBtn = document.querySelector('.create-button');
        const dialogElement = this.element.querySelector('.dialog');
        console.log(imgBtn);
        console.log(dialogElement);
    }
}
