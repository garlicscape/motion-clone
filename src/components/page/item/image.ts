export class ImageComponent {
  private element: HTMLElement;

  constructor(title: string, url: string) {
    const template = document.createElement('template');
    template.innerHTML = `<section class="image">
    <div class="image__holder"><img class="image__thumbnail"></div>
    <p class="image__title"></p>
  </section>`;
    this.element = template.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector(
      '.image__thumbnail'
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      '.image__title'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}

// 사용자에게 전달받은 데이터를 innterHTML에 설정하는 건 좋지 않고
// 위처럼 필요한 부분만 업데이트 해주는 게 더 안전
