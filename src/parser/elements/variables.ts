export type VariableElements = any;

export const isVariable = (element: string): element is VariableElements => {
  return true;
};

export class Variable {
  constructor(element: VariableElements) {
    this.element = element;
  }
  element: VariableElements;
}
