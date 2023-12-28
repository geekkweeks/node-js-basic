import process from "process";

process.addListener("exit", (exitCode) => {
  console.log(`Node JS exit with code ${exitCode}`);
});

console.log(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);

// Program already exit before calling below console
console.log("Hai");
