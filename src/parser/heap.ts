const { v4: uuidv4 } = require('uuid');

class Variable {
  constructor(variable: any) {
    this.id = uuidv4();
    this.variable = variable;
  }
  id: string;
  variable: any;
}

export class Heap {
  static variables: {};
}
