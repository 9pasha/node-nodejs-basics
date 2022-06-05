import * as fs from "fs/promises";
import * as path from "path";

export const copy = async () => {
    const folderPath = './files';
    const newFolderPath = './files_copy';

    const cloneFolder = async (folderPath, newFolderPath) => {
        await fs.mkdir(newFolderPath);

        const files = await fs.readdir(folderPath);

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const newFilePath = path.join(newFolderPath, file);

            await fs.copyFile(filePath, newFilePath);
        }
    };

    let folderWithFilesStat = null;
    let copyFolderWithFilesStat = null;

    try {
        folderWithFilesStat = await fs.stat(folderPath);

        try {
            copyFolderWithFilesStat = await fs.stat(newFolderPath);
        } catch (error) {
            await cloneFolder(folderPath, newFolderPath);
        }

        if (folderWithFilesStat && copyFolderWithFilesStat) {
            await cloneFolder(folderPath, newFolderPath);
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};
