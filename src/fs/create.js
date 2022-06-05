import * as fs from "fs/promises";

export const create = async () => {
    const filePath = './files/fresh.txt';
    const fileContent = 'I am fresh';
    const errorMessage = 'FS operation failed';

    let fileStat = null;

    try {
        fileStat = await fs.stat(filePath);

        if (fileStat)
            throw new Error(errorMessage);
    } catch (error) {
        if (error && fileStat) {
            throw new Error(errorMessage);
        } else {
            await fs.appendFile(filePath, fileContent);
        }
    }
};
