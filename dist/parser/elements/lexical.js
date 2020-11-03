"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLexical = (element) => {
    return ['{', '}', ';'].includes(element);
};
class Lexical {
    constructor(element) {
        element = this.element;
    }
}
exports.Lexical = Lexical;
//# sourceMappingURL=lexical.js.map