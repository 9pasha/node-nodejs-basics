import zlib from "zlib";
import fs from "fs";

export const compress = async () => {
    const inputFilePath = './files/fileToCompress.txt';
    const outputFilePath = './files/archive.gz';
    const gzip = zlib.createGzip();

    const fsReadStream = fs.createReadStream(inputFilePath);
    const fsWriteStream = fs.createWriteStream(outputFilePath);

    fsReadStream
        .pipe(gzip)
        .pipe(fsWriteStream);
};
