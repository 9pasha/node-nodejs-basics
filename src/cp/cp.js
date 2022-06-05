import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
    const pathToFile = './files/script.js';

    const child_process = spawn(`node ${pathToFile}`, args, {shell: true});
    child_process.stdout.on('data', data => { process.stdout.write(data) });
    process.stdin.on('data', (data) => child_process.stdin.write(data));
    child_process.on('close', () => process.exit());
};
