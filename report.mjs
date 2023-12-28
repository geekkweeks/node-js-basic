import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "error-report-log.json";

function simpleError() {
  throw new Error("Something went wrong");
}

simpleError();
