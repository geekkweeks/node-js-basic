// nested callback
const fetchData = (callback) => {
  setTimeout(() => {
    callback("Done!");
  }, 1500);
};

// this is async code with nested callback
setTimeout(() => {
  // this is call back function. will execute later
  console.log("Timer is done");
  fetchData((text) => {
    console.log(text);
  });
}, 2000);

// these are sync code
console.log("hai");
console.log("there");

// promise
const fetchDataWithPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise done");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Promise starting");
  fetchDataWithPromise()
    .then((res) => {
      console.log(res);
      return fetchDataWithPromise();
    })
    .then((res2) => {
      return console.log("res2: ", res2);
    });
}, 2000);
