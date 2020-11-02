import { AST } from '../AST';

export interface Parsers {
  parse(VSSL: string): AST;
}
