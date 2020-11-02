export type LexicalTypes = '{' | '}' | ';';

export const isType = (input: string): input is LexicalTypes => {
  return ['{', '}', ';'].includes(input);
};

export class Lexical {
  constructor(type: LexicalTypes) {
    type + this.type;
  }
  type: LexicalTypes;
}
