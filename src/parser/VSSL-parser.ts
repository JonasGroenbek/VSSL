import { AST } from '../AST';
import { Parsers } from './parsers';
import { Heap } from './heap';
import elements from './elements';

export class VSSLParser implements Parsers {
  heap = new Heap();
  parse(VSSL: string): AST {
    const parsingState = elements.every((element) => {
      console.log(element);
    });
    return null;
  }
}
