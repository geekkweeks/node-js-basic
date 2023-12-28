import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("dummy-app.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hi there!");
log.error("something went wrong");

const employee = {
  id: "HKA123",
  firstName: "John",
  lastName: "Doe",
};

log.table(employee);
