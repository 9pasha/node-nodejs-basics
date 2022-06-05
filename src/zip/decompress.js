import zlib from "zlib";
import fs from "fs";

export const decompress = async () => {
    const inputFilePath = './files/archive.gz';
    const outputFilePath = './files/fileToCompress.txt';

    const gzip = zlib.createUnzip();

    const fsReadStream = fs.createReadStream(inputFilePath);
    const fsWriteStream = fs.createWriteStream(outputFilePath);

    fsReadStream
        .pipe(gzip)
        .pipe(fsWriteStream);
};
