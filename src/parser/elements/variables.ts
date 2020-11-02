export type VariableElements = any;

export const isType = (input: string): input is VariableElements => {
  return true;
};

export class Variable {
  constructor(element: VariableElements) {
    this.element = element;
  }
  element: VariableElements;
}
