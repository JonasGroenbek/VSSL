import { AST } from '../AST';
import { Parsers } from './parsers';
import { Heap } from './heap';

export class VSSLParser implements Parsers {
  heap = new Heap();
  parse(VSSL: string): AST {
    return null;
  }
}
