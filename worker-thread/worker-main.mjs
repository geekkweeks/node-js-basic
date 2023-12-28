import { threadId, Worker } from "worker_threads";

const filePath = "./worker.mjs";

const worker1 = new Worker(filePath);
const worker2 = new Worker(filePath);

worker1.addListener("message", (message) => {
  console.log(`Thread-${threadId} received message from worker 1: ${message}`);
});

worker2.addListener("message", (message) => {
  console.log(`Thread-${threadId} received message from worker 2: ${message}`);
});

worker1.postMessage(9);
worker2.postMessage(4);
