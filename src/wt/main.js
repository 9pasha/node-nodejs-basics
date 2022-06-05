import { Worker } from 'worker_threads';
import os from "os";

export const performCalculations = async () => {
    const CPUcount = os.cpus().length;
    let results = [];

    for (let i = 10; i < 10 + CPUcount; i++) {
        results.push(await createWorker(i));
    }

    Promise.all(results)
        .then((results) => {
            console.log(results);
        });
};

const createWorker = (workerData) =>
    new Promise((resolve, reject) => {
        const workerFilePath = './worker.js';
        const worker = new Worker(workerFilePath, { workerData });

        worker.on('message', (data) => {
            resolve({ status: 'resolved', data });
        });
        worker.on('error', () => {
            resolve({ status: 'error', data: null });
        });
    });

performCalculations();