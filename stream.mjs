import fs from "fs";

const filePath = "dummy-text.log";

const writter = fs.createWriteStream(filePath);

writter.write("Hi");
writter.write("there");

const reader = fs.createReadStream(filePath);

reader.addListener("data", (data) => {
  console.log(data.toString());
});
