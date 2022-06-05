import fs from "fs";
import process from "process";

export const read = async () => {
    const filePath = './files/fileToRead.txt';

    const readableStream = fs.createReadStream(filePath);

    readableStream.on('data', (data) => {
        process.stdout.write(data.toString());
    });
};
