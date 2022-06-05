import fs from "fs/promises";

export const list = async () => {
    const folderPath = './files';
    const errorMessage = 'FS operation failed';

    try {
        await fs.stat(folderPath);
    } catch (error) {
        throw new Error(errorMessage);
    }

    const files = await fs.readdir(folderPath);

    console.log(files);
};