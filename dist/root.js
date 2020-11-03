"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_reader_1 = require("./file-reader");
const VSSL_parser_1 = require("./parser/VSSL-parser");
const fr = new file_reader_1.FileReader();
fr.read('example.txt').then((content) => {
    const parser = new VSSL_parser_1.VSSLParser();
    parser.parse(content);
});
//# sourceMappingURL=root.js.map