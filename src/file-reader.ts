import fs from 'fs';

export class FileReader {
  read(fileName): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(`${process.cwd()}/files/${fileName}`, (err, data) => {
        if (err !== null) {
          reject(err);
        }
        resolve(data.toString());
      });
    });
  }
}
