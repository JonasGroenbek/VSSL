export type LexicalElements = '{' | '}' | ';';

export const isLexical = (element: string): element is LexicalElements => {
  return ['{', '}', ';'].includes(element);
};

export class Lexical {
  constructor(element: LexicalElements) {
    element = this.element;
  }
  element: LexicalElements;
}
