const list_programming = [".Net", "PHP"];

const copy_list_programming = [...list_programming];
copy_list_programming.push("JAVA");

console.log(list_programming);
console.log(copy_list_programming);

const employe = {
  name: "alfan",
  position: "Owner",
};

let custom_employe = { ...employe };
console.log("before: ", custom_employe);

// Rest function
const toArray = (...args) => {
  return args;
};

console.log("Rest: ", toArray(3, 5, 6, 3));
