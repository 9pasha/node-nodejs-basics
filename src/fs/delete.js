import * as fs from "fs/promises";

export const remove = async () => {
    const deletedFilePath = './files/fileToRemove.txt';
    const errorMessage = 'FS operation failed';

    try {
        await fs.stat(deletedFilePath);
    } catch (error) {
        throw new Error(errorMessage);
    }

    await fs.rm(deletedFilePath);
};
