"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperator = (element) => {
    return ['=', '-', '+', '|', '&', '=='].includes(element);
};
class Operator {
    constructor(element) {
        this.element = element;
    }
}
exports.Operator = Operator;
//# sourceMappingURL=operators.js.map