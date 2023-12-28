const buffer = Buffer.from("ALFAN ZAH", "UTF8");

console.log(buffer.toString());
console.log(buffer.toString("hex"));
console.log(buffer.toString("base64"));
console.log(buffer.toString("base64url"));

const bufferBase64 = Buffer.from("QUxGQU4gWkFI", "base64");
console.log(bufferBase64.toString());
