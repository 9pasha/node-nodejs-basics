import fs from "fs/promises";
import crypto from "crypto";

export const calculateHash = async () => {
    const filePath = './files/fileToCalculateHashFor.txt';

    const fileContent = await fs.readFile(filePath, 'utf8');

    return crypto.createHash('sha256').update(fileContent).digest('hex');
};
