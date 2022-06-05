import * as fs from "fs/promises";

export const rename = async () => {
    const oldFilePath = './files/wrongFilename.txt';
    const newFilePath = './files/properFilename.md';

    const errorMessage = 'FS operation failed';

    let oldFileStat = null;
    let newFileStat = null;

    try {
        oldFileStat = await fs.stat(oldFilePath);

        try {
            newFileStat = await fs.stat(newFilePath);
        } catch (error) {
            await fs.rename(oldFilePath, newFilePath);
        }
    } catch (error) {
        throw new Error(errorMessage);
    }

    if (newFileStat) {
        throw new Error(errorMessage);
    }
};
