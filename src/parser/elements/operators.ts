import { VariableElements } from './variables';

export type OperatorElements = '=' | '-' | '+' | '|' | '&' | '==';

export const isOperator = (element: string): element is OperatorElements => {
  return ['=', '-', '+', '|', '&', '=='].includes(element);
};
export class Operator {
  constructor(element: OperatorElements) {
    this.element = element;
  }
  expects: () => {};
  element: OperatorElements;
}
