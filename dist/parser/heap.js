"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { v4: uuidv4 } = require('uuid');
class Variable {
    constructor(variable) {
        this.id = uuidv4();
        this.variable = variable;
    }
}
class Heap {
}
exports.Heap = Heap;
//# sourceMappingURL=heap.js.map