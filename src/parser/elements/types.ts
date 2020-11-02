export type TypeElements = 'BOOLEAN' | 'INTEGER';

export const isType = (element: string): element is TypeElements => {
  return ['BOOLEAN', 'INTEGER'].includes(element);
};

export class Type {
  constructor(element: TypeElements) {
    this.element = element;
  }
  element: TypeElements;
}
