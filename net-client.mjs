import net from "net";

const clientConnection = net.createConnection({
  port: 3000,
  host: "localhost",
});

clientConnection.addListener("data", (data) => {
  console.log(`Received information from the server: ${data.toString()}`);
});

setInterval(() => {
  clientConnection.write(`Greetings from client ${new Date()}\r\n`);
}, 3000);
