import net from "net";

// const server = net.createServer((socket) => {
//     socket.end('goodbye\n');
//   }).on('error', (err) => {
//     // Handle errors here.
//     throw err;
//   });

const server = net.createServer((client) => {
  console.log("Client connected");
  client.addListener("data", (data) => {
    console.log(`Received data: ${data.toString()}`);
    client.write(`Hi there ${data.toString()}`);
  });
});

server.listen(3000, "localhost");
