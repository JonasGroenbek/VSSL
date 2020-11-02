export type TypeElements = 'BOOLEAN' | 'INTEGER';

export const isType = (input: string): input is TypeElements => {
  return ['BOOLEAN', 'INTEGER'].includes(input);
};

export class Type {
  constructor(element: TypeElements) {
    this.element = element;
  }
  element: TypeElements;
}
