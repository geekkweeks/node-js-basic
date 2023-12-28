import https from "https";

const limit = 10;
const url = "https://catfact.ninja/breeds?limit=10";

const request = https.request(
  url,
  {
    method: "GET",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  },
  (response) => {
    response.on("data", (data) => {
      console.log(JSON.parse(data.toString()));
    });
  }
);

request.end();
