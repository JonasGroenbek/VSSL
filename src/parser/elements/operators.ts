import { VariableElements } from './variables';

export type OperatorElements = '=' | '-' | '+' | '|' | '&' | '==';

export const isType = (input: string): input is OperatorElements => {
  return ['=', '-', '+', '|', '&', '=='].includes(input);
};
export class Operator {
  constructor(element: OperatorElements) {
    this.element = element;
  }
  expects: [VariableElements];
  element: OperatorElements;
}
