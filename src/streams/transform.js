import { Transform } from 'stream';

export const transform = async () => {
    const createReverseStringStream = () =>
        new Transform({
            transform(chunk, enc, callback) {
                const reversedString = chunk.toString().split('').reverse().join('');
                callback(null, reversedString);
            }
        });

    const reverseStringStream = createReverseStringStream();

    process.stdin
        .pipe(reverseStringStream)
        .pipe(process.stdout);
};
