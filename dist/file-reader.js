"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class FileReader {
    read(fileName) {
        return new Promise((resolve, reject) => {
            fs_1.default.readFile(`${process.cwd()}/files/${fileName}`, (err, data) => {
                if (err !== null) {
                    reject(err);
                }
                resolve(data.toString());
            });
        });
    }
}
exports.FileReader = FileReader;
//# sourceMappingURL=file-reader.js.map