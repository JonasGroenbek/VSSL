"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatement = (element) => {
    return ['RETURN', 'WHILE', 'IF', 'ELSE'].includes(element);
};
class Statement {
    constructor(element) {
        this.element = element;
    }
}
exports.Statement = Statement;
//# sourceMappingURL=statements.js.map