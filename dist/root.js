"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_reader_1 = require("./file-reader");
const fr = new file_reader_1.FileReader();
fr.read('example.txt').then((content) => {
    console.log(content);
});
//# sourceMappingURL=root.js.map