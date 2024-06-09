export class ImageComponent {
    constructor(url, title) {
        this.url = url;
        this.title = title;
        this.liElement = document.createElement('li');
        this.imgElement = document.createElement('img');
        this.titleElement = document.createElement('span');
        this.imgElement.src = this.url;
        this.titleElement.innerText = this.title;
        this.liElement.setAttribute('class', 'image');
        this.liElement.appendChild(this.imgElement);
        this.liElement.appendChild(this.titleElement);
    }
    addImg(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.liElement);
    }
}
