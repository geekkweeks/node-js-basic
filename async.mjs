function samplePromise() {
  return Promise.resolve("ALFAN");
}

const name = await samplePromise();
console.log(name);
