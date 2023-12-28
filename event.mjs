import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("developer", (name) => {
  console.info(`Hai ${name}`);
});

emitter.addListener("developer", (name) => {
  console.info(`Your job ${name}`);
});

emitter.addListener("developer", (name) => {
  console.info(`Your skill ${name}`);
});

emitter.emit("developer", "NODE JS");
