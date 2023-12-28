import fs from "fs/promises";

const file = "file_one.txt";

await fs.appendFile(file, "ini di append");

const buffer = await fs.readFile(file);

console.info(buffer.toString());
