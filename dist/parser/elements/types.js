"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isType = (element) => {
    return ['BOOLEAN', 'INTEGER'].includes(element);
};
class Type {
    constructor(element) {
        this.element = element;
    }
}
exports.Type = Type;
//# sourceMappingURL=types.js.map