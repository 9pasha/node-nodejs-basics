import * as fs from "fs/promises";

export const read = async () => {
    const readFilePath = './files/fileToRead.txt';
    const errorMessage = 'FS operation failed';

    try {
        await fs.stat(readFilePath);
    } catch (error) {
        throw new Error(errorMessage);
    }

    const fileContent = await fs.readFile(readFilePath, 'utf8');

    console.log(fileContent);
};
