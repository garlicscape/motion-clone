import { Draggable, Droppable, Hoverable } from '../components/common/type';
import { Component } from './../components/component';

type GConstructor<T = {}> = new (...args: any[]) => T;
type DraggableClass = GConstructor<Component & Draggable>;

export function EnableDragging<TBase extends DraggableClass>(Base: TBase) {
  /*
    EnableDragging는 Base 클래스를 받아와서 그 클래스의 생성자를 감싸줌
    **/
  return class DraggableItem extends Base {
    constructor(...args: any[]) {
      super(...args); // 기존 클래스의 생성자를 그대로 호출
      this.registerEventListener('dragstart', (event: DragEvent) => {
        this.onDragStart(event);
      });
      this.registerEventListener('dragend', (event: DragEvent) => {
        this.onDragEnd(event);
      });
      //클래스에 registerEventListener를 이용해서 이벤트를 등록
    }
  };
}

type DragHoverClass = GConstructor<Component & Hoverable>;

export function EnableHover<TBase extends DragHoverClass>(Base: TBase) {
  return class DragHoverArea extends Base {
    constructor(...args: any[]) {
      super(...args);
      this.registerEventListener('dragenter', (event: DragEvent) => {
        event.preventDefault();
        this.onDragEnter(event);
      });
      this.registerEventListener('dragleave', (event: DragEvent) => {
        this.onDragLeave(event);
      });
    }
  };
}

type DropTargetClass = GConstructor<Component & Droppable>;

export function EnableDrop<TBase extends DropTargetClass>(Base: TBase) {
  return class DropArea extends Base {
    constructor(...args: any[]) {
      super(...args);
      this.registerEventListener('dragover', (event: DragEvent) => {
        event.preventDefault();
        this.onDragOver(event);
      });
      this.registerEventListener('drop', (event: DragEvent) => {
        event.preventDefault();
        this.onDragDrop(event);
      });
    }
  };
}
