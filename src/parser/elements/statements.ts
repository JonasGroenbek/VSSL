export type StatementElements = 'RETURN' | 'WHILE' | 'IF' | 'ELSE';

export const isType = (input: string): input is StatementElements => {
  return ['RETURN', 'WHILE', 'IF', 'ELSE'].includes(input);
};

export class Statement {
  constructor(element: StatementElements) {
    this.element = element;
  }
  element: StatementElements;
}
