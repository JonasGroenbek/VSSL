import { FileReader } from './file-reader';
import { VSSLParser } from './parser/VSSL-parser';

const fr = new FileReader();
fr.read('example.txt').then((content) => {
  const parser = new VSSLParser();
  parser.parse(content);
});
