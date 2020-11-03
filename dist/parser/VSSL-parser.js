"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const heap_1 = require("./heap");
const elements_1 = __importDefault(require("./elements"));
class VSSLParser {
    constructor() {
        this.heap = new heap_1.Heap();
    }
    parse(VSSL) {
        const parsingState = elements_1.default.every((element) => {
            console.log(element);
        });
        return null;
    }
}
exports.VSSLParser = VSSLParser;
//# sourceMappingURL=VSSL-parser.js.map