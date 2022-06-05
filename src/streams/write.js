import fs from "fs";

export const write = async () => {
    const filePath = './files/fileToWrite.txt';

    const writableStream = fs.createWriteStream(filePath);

    process.stdin.on('data', chunk => {
        writableStream.write(chunk, 'utf8');
    });
};
