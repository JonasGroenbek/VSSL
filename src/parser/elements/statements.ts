export type StatementElements = 'RETURN' | 'WHILE' | 'IF' | 'ELSE';

export const isStatement = (element: string): element is StatementElements => {
  return ['RETURN', 'WHILE', 'IF', 'ELSE'].includes(element);
};

export class Statement {
  constructor(element: StatementElements) {
    this.element = element;
  }
  element: StatementElements;
}
