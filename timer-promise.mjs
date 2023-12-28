import timers from "timers/promises";

console.log(`started : ${new Date()}`);

const res = await timers.setTimeout(2000, "Hi There!");

console.log(`res: ${res}. Finished : ${new Date()}`);

for await (const startTime of timers.setInterval(2000, "Horay")) {
  console.log(`Start time: ${new Date()}`);
}
